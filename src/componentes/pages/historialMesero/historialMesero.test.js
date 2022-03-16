import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HistorialMesero from './historialMesero';


describe('prueba en <HistorialMesero/>', () => {

  it ('evalua si es una función', () => {
    expect( typeof HistorialMesero ).toBe('function')
  })
  it('renders HistorialMesero', () => {
    render(<HistorialMesero />)
    expect(screen.getByText(/HISTORIAL PEDIDOS/i)).toBeInTheDocument()
  })      
})