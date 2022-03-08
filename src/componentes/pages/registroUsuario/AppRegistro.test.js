import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Registro from './AppRegistro';


describe('prueba en <Registro/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof Registro ).toBe('function')
  })
  it('renders Registro', () => {
    render(<Registro />)
    expect(screen.getByText(/FORMULARIO DE REGISTRO/i)).toBeInTheDocument()
  })      
})