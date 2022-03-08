import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import LoginFormAdm from './loginFormAdm';


describe('prueba en <LoginFormAdm/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof LoginFormAdm ).toBe('function')
  })
  it('renders LoginFormAdm', () => {
    render(<LoginFormAdm />)
    expect(screen.getByText('¿Olvidaste tu contraseña?')).toBeInTheDocument()
  }) 
  it('renders text in the inputs usuario', () => {
    render(<LoginFormAdm />)
    expect(screen.getAllByPlaceholderText('Usuario')).toBeInTheDocument()
  }) 
  it('renders text in the inputs Contraseña', () => {
    render(<LoginFormAdm />)
    expect(screen.getAllByPlaceholderText('Contraseña')).toBeInTheDocument()
  })   
    
})