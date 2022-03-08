import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RealizarPedido from './RealizarPedido';

describe('prueba en <RealizarPedido/>', () => {
  
  it ('evalua si es una función', () => {
    expect( typeof RealizarPedido).toBe('function')
  })  
  it('renders RealizarPedido', () => {
    render(<RealizarPedido />)
    expect(screen.getAllByTestId('test-section')).toBeInTheDocument()
  })   
})