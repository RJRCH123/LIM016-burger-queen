import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HistorialCocinero from './historialCocinero';


describe('prueba en <HistorialCocinero/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof HistorialCocinero ).toBe('function')
    })
    it('renders HistorialCocinero', () => {
        render(<HistorialCocinero />)
        expect(screen.getByText(/HISTORIAL PEDIDOS/i)).toBeInTheDocument()
    })      
})