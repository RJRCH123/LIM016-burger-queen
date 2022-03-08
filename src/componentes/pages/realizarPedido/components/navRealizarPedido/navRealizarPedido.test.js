import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NavRealizarPedido from './navRealizarPedido';

describe('prueba en <NavRealizarPedido/>', () => {
    
  it ('evalua si es una función', () => {
    expect( typeof NavRealizarPedido).toBe('function')
  })  
  it('renders NavRealizarPedido', () => {
    render(<NavRealizarPedido />)
    expect(screen.getAllByAltText('reloj')).toBeInTheDocument()
  })   
})