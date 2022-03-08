import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PedidosPreparados from './pedidosPreparados';


describe('prueba en <PedidosPreparados/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof PedidosPreparados ).toBe('function')
    })
    it('renders PedidosPreparados', () => {
        render(<PedidosPreparados />)
        expect(screen.getByText(/PEDIDOS PREPARADOS/i)).toBeInTheDocument()
    })      
})