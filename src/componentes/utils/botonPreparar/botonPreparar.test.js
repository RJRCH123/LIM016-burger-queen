import '@testing-library/jest-dom/extend-expect';
//import { render } from '@testing-library/react';
import BtnPreparar from './botonPreparar';

describe('prueba en <BotonDescargar/>', () => {

    /* const props = {
        info:{
            cliente:'rosa',
            estado:'pendiente',
            id:'4X7MNA5tkU2gVoxtGgHW',
            mesa: '4'
        }
    } */
            
    it ('evalua si es una función', () => {
      expect( typeof BtnPreparar).toBe('function')
    })
    /* it('Deberiamos renderizar componente Encabezado' , () => {
        const {container}=render(<BtnPreparar props={props}/>)
        expect(container).toBeInTheDocument();
    }) */
    /* it('Deberia aparecer la imagen con el icono de descargar',() => {
        render(<BtnPreparar/>);
        const boton1 =  screen.queryByRole('button', {text:'Preparado'});
        expect(boton1).toBeInTheDocument();        
    }) */
    
})   