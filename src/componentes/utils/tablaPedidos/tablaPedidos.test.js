import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TablaDePedidos from './tablaPedidos';


describe('prueba en <TablaDePedidos/>', () => {

  const items = [
    {cliente: "MARIELENA GRATEROL", hora: "22:15:12", id: "yT6PwVUTnhisFM4Wa1m3", pedido: "ver detalle", timestamp: "20/2/2022", total: "45.60"},
    {cliente: "CAROLINA FERNANDEZ", hora: "22:36:19", id: "kzAt7LeSF55Wk7jAjGfm", pedido: "ver detalle", timestamp: "20/2/2022", total: "50.50"}
  ]

  it ('evalua si es una función', () => {
    expect( typeof TablaDePedidos ).toBe('function')
  }) 
  it('renders appropriately TablaDePedidos', () => {
    render(<TablaDePedidos props={items}/>)
    expect(screen.getAllByRole('table', {id:'historial-Ventas-Karma'})).toBeInTheDocument()
  })  
   
})
