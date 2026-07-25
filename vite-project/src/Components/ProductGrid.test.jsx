import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductGrid from './ProductGrid.jsx'

const products = [
  {
    img: 'https://example.com/one.jpg',
    title: 'Nike Air Monarch IV',
    rating: 4.8,
    reviews: 123,
    prevPrice: 140,
    newPrice: 200,
    company: 'Nike',
    color: 'white',
    category: 'sneakers',
  },
  {
    img: 'https://example.com/two.jpg',
    title: 'Chunky High Heel',
    rating: 4.5,
    reviews: 50,
    prevPrice: 140,
    newPrice: 50,
    company: 'Vans',
    color: 'black',
    category: 'heels',
  },
]

describe('ProductGrid', () => {
  it('renders a card per product', () => {
    render(<ProductGrid products={products} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(products.length)
    for (const product of products) {
      expect(screen.getByRole('heading', { name: product.title })).toBeInTheDocument()
    }
  })

  it('renders nothing but the grid container when there are no products', () => {
    const { container } = render(<ProductGrid products={[]} />)
    expect(screen.queryAllByRole('img')).toHaveLength(0)
    expect(container.firstChild.childNodes).toHaveLength(0)
  })
})
