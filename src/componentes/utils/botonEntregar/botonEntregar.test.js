import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BtnEntregar from './botonEntregar';

describe('prueba en <BtnEntregar/>', () => {
  it ('evalua si es una función', () => {
    expect( typeof BtnEntregar).toBe('function')
  })  
  it('renders RegistrarPersonal', () => {
    render(<BtnEntregar />)
    expect(screen.getByText(/Entregado/i)).toBeInTheDocument()
  })   
})