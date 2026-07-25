import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import products from './Data/Data.js'

describe('App', () => {
  it('renders a card for every product in the catalogue', () => {
    render(<App />)
    expect(screen.getAllByRole('img')).toHaveLength(products.length)
  })
})
