import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ProductoPorPedir from './productoPorPedir';

describe('prueba en <ProductoPorPedir/>', () => {
  
  it ('evalua si es una función', () => {
    expect( typeof ProductoPorPedir).toBe('function')
  }) 
  it('renders section ProductoPorPedir', () => {
    render(<ProductoPorPedir />)
    expect(screen.getAllByTestId('test-section-producto')).toBeInTheDocument()
  })  
  it('renders ProductoPorPedir', () => {
    render(<ProductoPorPedir />)
    expect(screen.getAllByRole('button', {text:'Agregar'})).toBeInTheDocument()
  }) 
  it('renders boton ProductoPorPedir', () => {
    render(<ProductoPorPedir />)
    expect(screen.getAllByRole('button', {type:'button'})).toBeInTheDocument()
  })  
})