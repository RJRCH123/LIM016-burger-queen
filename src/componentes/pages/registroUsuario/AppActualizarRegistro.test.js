import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ActualizarRegistro from './AppActualizarRegistro';


describe('prueba en <ActualizarRegistro/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof ActualizarRegistro ).toBe('function')
    })
    it('renders ActualizarRegistro', () => {
        render(<ActualizarRegistro />)
        expect(screen.getByText(/ACTUALIZAR USUARIO/i)).toBeInTheDocument()
    })      
})