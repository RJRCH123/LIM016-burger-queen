import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Bienvenida from './Bienvenida';


describe('prueba en <Bienvenid/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof Bienvenida ).toBe('function')
  })
  it('renders RegistrarPersonal', () => {
    render(<Bienvenida />)
    expect(Bienvenida).toBeInTheDocument()
  })      
})