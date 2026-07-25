import { describe, expect, it } from 'vitest'
import data from './Data.js'

const CATEGORIES = ['sneakers', 'flats', 'sandals', 'heels']
const COMPANIES = ['Nike', 'Adidas', 'Puma', 'Vans']

describe('product data', () => {
  it('exports a non-empty array of products', () => {
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)
  })

  it('gives every product the fields the UI reads', () => {
    for (const product of data) {
      expect(Object.keys(product).sort()).toEqual(
        [
          'category',
          'color',
          'company',
          'img',
          'newPrice',
          'prevPrice',
          'rating',
          'reviews',
          'title',
        ].sort(),
      )
    }
  })

  it('uses non-empty strings for every textual field', () => {
    const textFields = ['img', 'title', 'company', 'color', 'category']
    for (const product of data) {
      for (const field of textFields) {
        expect(typeof product[field], `${product.title}.${field}`).toBe('string')
        expect(product[field].trim(), `${product.title}.${field}`).not.toBe('')
      }
    }
  })

  it('uses absolute image urls', () => {
    for (const product of data) {
      expect(product.img).toMatch(/^https:\/\//)
    }
  })

  it('rates every product between 0 and 5', () => {
    for (const product of data) {
      expect(typeof product.rating, product.title).toBe('number')
      expect(product.rating).toBeGreaterThan(0)
      expect(product.rating).toBeLessThanOrEqual(5)
    }
  })

  it('stores prices and review counts as positive numbers', () => {
    for (const product of data) {
      for (const field of ['prevPrice', 'newPrice', 'reviews']) {
        expect(typeof product[field], `${product.title}.${field}`).toBe('number')
        expect(product[field], `${product.title}.${field}`).toBeGreaterThan(0)
      }
    }
  })

  it('only uses known categories and companies', () => {
    for (const product of data) {
      expect(CATEGORIES).toContain(product.category)
      expect(COMPANIES).toContain(product.company)
    }
  })

  it('has products in every category the sidebar filters on', () => {
    const used = new Set(data.map((product) => product.category))
    for (const category of CATEGORIES) {
      expect(used).toContain(category)
    }
  })

  it('has products for every company brand filter', () => {
    const used = new Set(data.map((product) => product.company))
    for (const company of COMPANIES) {
      expect(used).toContain(company)
    }
  })

  it('has no duplicate products', () => {
    const identities = data.map(
      (product) => `${product.company}|${product.title}|${product.color}|${product.newPrice}`,
    )
    expect(new Set(identities).size).toBe(identities.length)
  })

  it('supports case-insensitive title search the way the search bar does', () => {
    const query = 'nike'
    const matches = data.filter((product) =>
      product.title.toLowerCase().includes(query),
    )
    expect(matches.length).toBeGreaterThan(0)
    for (const match of matches) {
      expect(match.title.toLowerCase()).toContain(query)
    }
  })
})
