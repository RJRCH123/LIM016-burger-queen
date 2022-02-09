import React from "react";
import {
  Routes, 
  Route
} from "react-router-dom";

import Bienvenida from "./componentes/bienvenida/Bienvenida";
import VistaAdmin from './componentes/vistas/vistaAdmin/vistaAdmin';
import VistaCocinero from './componentes/vistas/vistaCocinero/vistaCocinero';
import VistaMesero from './componentes/vistas/vistaMesero/vistaMesero';
import Login from './componentes/login/login';
import Inicio from './componentes/Inicio/inicio';
import FormAdmin from "./componentes/login/loginFormAdm";
import FormEmploye from "./componentes/login/loginFormEmploye";
import RegistroEmpleado from './componentes/pages/registroUsuario/registrarEmpleado';
import PedidosPorPreparar from './componentes/pages/pedidosPorPreparar/pedidosPorPreparar';
import PedidosPreparados from './componentes/pages/pedidosPreparados/pedidosPreparados';
import PedidosEntregar from './componentes/pages/pedidosEntregar/pedidosEntregar';
import HistorialVentas from './componentes/pages/historialVentas/historialVentas';
import HistorialEmpleados from './componentes/pages/historialEmpleados/historialEmpleados';
import HistorialCocinero from './componentes/pages/historialCocinero/historialCocinero';
import HistorialMesero from './componentes/pages/historialMesero/historialMesero';
import RealizarPedido from './componentes/pages/realizarPedido/RealizarPedido'
import Carta from './componentes/bienvenida/container/Menu/carta';
import Pedido from './componentes/utils/pedido/pedido'

function App() {
  return (
    <div className="App">
      <Routes>
                
        <Route path='/admin/registro/registro-personal' element={<VistaAdmin content={<RegistroEmpleado/>}/>}/>
        <Route path='/admin/registro/pedidos-preparados' element={<VistaAdmin content={<PedidosPreparados/>}/>}/>
        <Route path='/admin/registro/historial-ventas' element={<VistaAdmin content={<HistorialVentas/>}/>}/>
        <Route path='/admin/registro/historial-empleados' element={<VistaAdmin content={<HistorialEmpleados/>}/>}/>
        <Route path='/admin/registro/historial-cocinero' element={<VistaAdmin content={<HistorialCocinero/>}/>}/>
        <Route path='/admin/registro/historial-mesero' element={<VistaAdmin content={<HistorialMesero/>}/>}/>
        <Route path='/admin/registro/pedidos-entregar' element={<VistaAdmin content={<PedidosEntregar/>}/>}/>
        <Route path='/admin/registro/*' element={<VistaAdmin content={<Inicio/>}/>}/>

        <Route path='/cocinero/registro/pedidos-por-preparar' element={<VistaCocinero content={<PedidosPorPreparar content={<Pedido/>}/>} />}/>
        <Route path='/cocinero/registro/pedidos-preparados' element={<VistaCocinero content={<PedidosPreparados content={<Pedido/>}/>} /> }/>
        <Route path='/cocinero/registro/historial-pedidos' element={<VistaCocinero content={<HistorialCocinero/>}/>}/>
        <Route path='/cocinero/registro/*' element={<VistaCocinero content={<Inicio/>}/>}/>

        <Route path='/mesero/registro/realizar-pedido' element={<VistaMesero content={<RealizarPedido />} />}/>
        <Route path='/mesero/registro/pedidos-preparados' element={<VistaMesero content={<PedidosPreparados/>}/>}/>
        <Route path='/mesero/registro/historial-pedidos' element={<VistaMesero content={<HistorialMesero/>} />}/>
        <Route path='/mesero/registro/*' element={<VistaMesero content={<Inicio/>}/>}/>

        <Route path='/bienvenida' element={<Bienvenida/>}/> 
        <Route path='/employe' element={<Login form={<FormEmploye/>}/>}/>
        <Route path='/login' element={<Login form={<FormAdmin/>} />}/> 
        <Route path='/carta' element={<Carta/>}/>      
        <Route path='/' element={<Bienvenida/>}/>

      </Routes>
    </div>      
  );
}

export default App;
