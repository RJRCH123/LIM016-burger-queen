import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PedidosPorPreparar from './pedidosPorPreparar';


describe('prueba en <PedidosPorPreparar/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof PedidosPorPreparar ).toBe('function')
  })
  it('renders PedidosPorPreparar', () => {
    render(<PedidosPorPreparar />)
    expect(screen.getAllByText(/PEDIDOS POR PREPARAR/i)).toBeInTheDocument()
  }) 
       
})