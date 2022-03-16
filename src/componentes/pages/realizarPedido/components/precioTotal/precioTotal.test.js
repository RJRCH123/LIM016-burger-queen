import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PrecioTotal from './precioTotal';

describe('prueba en <PrecioTotal/>', () => {
  
  it ('evalua si es una función', () => {
    expect( typeof PrecioTotal).toBe('function')
  })  
  it('renders PrecioTotal', () => {
    render(<PrecioTotal />)
    expect(screen.getByText(/Total:/i)).toBeInTheDocument()
  })   
})