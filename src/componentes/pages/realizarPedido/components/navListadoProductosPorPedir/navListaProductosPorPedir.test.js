import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NavListaProductosPorPedir from './navListadoProductosPorPedir';

describe('prueba en <NavListaProductosPorPedir/>', () => {
  
  it ('evalua si es una función', () => {
    expect( typeof NavListaProductosPorPedir).toBe('function')
  })  
  it('renders button NavListaProductosPorPedir', () => {
    render(<NavListaProductosPorPedir />)
    expect(screen.getAllByRole('button', {className:"btnTipoMenu"})).toBeInTheDocument()
  })   
  it('renders img NavListaProductosPorPedir', () => {
    render(<NavListaProductosPorPedir />)
    expect(screen.getAllByRole('img', {alt:"tipoh"})).toBeInTheDocument()
  }) 
})