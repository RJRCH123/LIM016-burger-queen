import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PedidosEntregar from './pedidosEntregar';


describe('prueba en <PedidosEntregar/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof PedidosEntregar ).toBe('function')
    })
    it('renders PedidosEntregar', () => {
        render(<PedidosEntregar />)
        expect(screen.getAllByText(/PEDIDOS POR ENTREGAR/i)).toBeInTheDocument()
    })      
})