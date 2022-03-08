import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import RegistrarEmpleado from './registrarEmpleado';


describe('prueba en <RegistrarEmpleado/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof RegistrarEmpleado ).toBe('function')
  })
  /* it('renders RegistrarEmpleado', () => {
      render(<RegistrarEmpleado />)
      const divContainer = screen.getAllByRole('div', {className: /containerRegistro/i})
      expect(divContainer).toBeInTheDocument()
  }) */      
})