import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard.jsx'

const product = {
  img: 'https://example.com/shoe.jpg',
  title: 'Nike Air Monarch IV',
  rating: 4.8,
  reviews: 123,
  prevPrice: 140,
  newPrice: 200,
  company: 'Nike',
  color: 'white',
  category: 'sneakers',
}

describe('ProductCard', () => {
  it('shows the product image labelled with its title', () => {
    render(<ProductCard product={product} />)
    const image = screen.getByRole('img', { name: product.title })
    expect(image).toHaveAttribute('src', product.img)
  })

  it('shows the title, rating, review count and company', () => {
    render(<ProductCard product={product} />)
    expect(screen.getByRole('heading', { name: product.title })).toBeInTheDocument()
    expect(screen.getByText(/4\.8/)).toBeInTheDocument()
    expect(screen.getByText(/123 reviews/)).toBeInTheDocument()
    expect(screen.getByText(product.company)).toBeInTheDocument()
  })

  it('strikes through the previous price and shows the current one', () => {
    const { container } = render(<ProductCard product={product} />)
    expect(container.querySelector('del')).toHaveTextContent('$140')
    expect(screen.getByText(/\$200/)).toBeInTheDocument()
  })
})
