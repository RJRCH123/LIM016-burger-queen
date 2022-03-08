import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HistorialEmpleados from './historialEmpleados';


describe('prueba en <HistorialEmpleados/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof HistorialEmpleados ).toBe('function')
    })
    it('renders HistorialEmpleados', () => {
        render(<HistorialEmpleados />)
        expect(screen.getByText(/HISTORIAL EMPLEADOS/i)).toBeInTheDocument()
    })      
})