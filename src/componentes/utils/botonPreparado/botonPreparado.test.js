import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import BtnPreparado from './botonPreparado';


describe('prueba en <BtnPreparado/>', () => {

    it ('evalua si es una función', () => {
      expect( typeof BtnPreparado).toBe('function')
    })
    /* it('se espera que el boton Preparado este en la vista', () => {
        render(<BtnPreparado/>)
        expect(screen.getByText('Preparado')).toBeInTheDocument()
    }) */
    /* it('Deberiamos renderizar componente Encabezado' , () => {
        const {boton} =render(<BtnPreparado/>)
        expect(boton).toBeInTheDocument();
    }) */
   /*  it('Deberia aparecer la imagen con el icono de descargar',() => {
        render(<BotonDescargar/>);
        const img =  screen.queryByRole('img', {alt: /descargar/i});
        expect(img).toBeInTheDocument();        
    }) */
    /* it('Deberian aparecer un div con tl type=onclick',() => {
        render(<BotonDescargar/>);
        const div =  screen.queryByRole('div', {type: /onClick/i});
        expect(div).toBeInTheDocument();        
    }) */
})   

