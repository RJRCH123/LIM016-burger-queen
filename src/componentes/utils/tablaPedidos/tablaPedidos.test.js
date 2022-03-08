import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import TablaDePedidos from './tablaPedidos';


describe('prueba en <TablaDePedidos/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof TablaDePedidos ).toBe('function')
    })    
})
