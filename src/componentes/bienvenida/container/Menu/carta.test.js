import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Carta from './carta';

describe('prueba en <Carta/>', () => {
  it ('evalua si es una función', () => {
    expect( typeof Carta).toBe('function')
  })  
  it('renders RegistrarPersonal', () => {
    render(<Carta />)
    expect(screen.getByRole('img', {alt:"MenuSpecial"})).toBeInTheDocument()
  })   
})