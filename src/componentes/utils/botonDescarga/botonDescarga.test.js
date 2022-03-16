import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BotonDescargar from './botonDescarga';

describe('prueba en <BotonDescargar/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof BotonDescargar).toBe('function')
  })
  it('Deberiamos renderizar componente' , () => {
    const {container}=render(< BotonDescargar/>)
    expect(container).toBeInTheDocument();
  })   
})   