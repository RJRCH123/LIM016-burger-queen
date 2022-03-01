import { db } from "../../../firebase/firebase-config";
import { doc, updateDoc } from 'firebase/firestore';
import './botonEntregar.scss';

const BotonEntregar = (props) => {

  const actualizarEstado = async (id) => {
    const pedidoDocRef = doc(db, 'pedidos', id)
    await updateDoc(pedidoDocRef, {
      estado: "finalizado"        
    });
    props.loading(true);    
  }

  return  ( 
    <div className='botonEntragar'>
      <div className='botonSecEntregar'>
        <button 
          type="onClick"
          onClick= {() => actualizarEstado(props.info.id) }
          >Entregado
        </button>                        
      </div>
    </div>        
  )
} 

export default BotonEntregar