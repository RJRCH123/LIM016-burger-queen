import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HistorialVentas from './historialVentas';


describe('prueba en <HistorialVentas/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof HistorialVentas ).toBe('function')
    })
    it('renders HistorialVentas', () => {
        render(<HistorialVentas />)
        expect(screen.getByText(/HISTORIAL VENTAS/i)).toBeInTheDocument()
    })      
})