import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import Botones from './botonesCRUD';


describe('prueba en <Botones/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof Botones ).toBe('function')
    })    
})
