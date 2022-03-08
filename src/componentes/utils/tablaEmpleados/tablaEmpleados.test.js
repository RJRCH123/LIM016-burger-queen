import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import TablaDeEmpleados from './tablaEmpleados';


describe('prueba en <TablaDeEmpleados/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof TablaDeEmpleados ).toBe('function')
    })    
})
