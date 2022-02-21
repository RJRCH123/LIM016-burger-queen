import { db } from "../../../firebase/firebase-config";
import { doc, updateDoc, addDoc, collection} from 'firebase/firestore';
import './botonEntregar.scss';

const BotonEntegar = (props) => {

  const actualizarEstado = async (id) => {
    const pedidoDocRef = doc(db, 'pedidos', id)
    await updateDoc(pedidoDocRef, {
      estado: "entregado/finalizado"        
    });
    createDoc(props);
    props.loading(true);    
  }

  const PedidoFinalizadoCollectionRef = collection(db, 'pedidosFinalizados')
  const createDoc = async (props) => {
    const data = props.info;
    //console.log(data);
    await addDoc(PedidoFinalizadoCollectionRef, {
      cliente: data.cliente,
      estado: "entregado/finalizado", 
      mesa: data.mesa,
      orden: data.orden,
      timestamp: data.timestamp,
      total: data.total      
    })
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

export default BotonEntegar