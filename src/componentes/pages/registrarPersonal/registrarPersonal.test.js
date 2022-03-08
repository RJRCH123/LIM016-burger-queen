import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import RegistrarPersonal from './registrarPersonal';


describe('prueba en <RegistrarPersonal/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof RegistrarPersonal ).toBe('function')
  })
  it('renders RegistrarPersonal', () => {
    render(<RegistrarPersonal />)
    expect(screen.getByText(/FORMULARIO DE REGISTRO/i)).toBeInTheDocument()
  })      
})