import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
//import { render, screen } from '@testing-library/react';
import BtnCancelarYConfirmar from './btnsCancelarYConfirmar';

describe('prueba en <BtnCancelarYConfirmar/>', () => {
  
  it ('evalua si es una función', () => {
    expect( typeof BtnCancelarYConfirmar).toBe('function')
  })  
  /* it('renders BtnCancelarYConfirmar', () => {
    render(<BtnCancelarYConfirmar />)
    expect(screen.getAllByRole('section', {className:'btnsContainer'})).toBeInTheDocument()
    expect(screen.getAllByRole('button', {className:'confirm__button'})).toBeInTheDocument()
    expect(screen.getAllByRole('button', {className:'cancel__button'})).toBeInTheDocument()
  })   */ 
})