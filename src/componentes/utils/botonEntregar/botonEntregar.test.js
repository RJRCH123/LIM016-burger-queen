import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BtnEntregar from './botonEntregar';

describe('prueba en <BtnEntregar/>', () => {
    it ('evalua si es una función', () => {
      expect( typeof BtnEntregar).toBe('function')
    })
    it('Deberiamos renderizar componente BtnEntregar' , () => {
        const {container}=render(<BtnEntregar/>)
        expect(container).toBeInTheDocument();
    })    
})   

