import React from "react";
import {
  Routes, 
  Route
} from "react-router-dom";

import Bienvenida from "./componentes/bienvenida/Bienvenida";
// import FormEmploy from "./componentes/login/loginFormEmploy;"

import Inicio from './componentes/Inicio/inicio';
import Registro from './componentes/registro/registro';
import Login from './componentes/login/login';
import FormAdmin from "./componentes/login/loginFormAdm";
import FormEmploye from "./componentes/login/loginFormEmploye";
import RegistroPersonal from './componentes/pages/registrarPersonal';
import PedidosPreparados from './componentes/pages/pedidosPreparados';
import PedidosEntregar from './componentes/pages/pedidosEntregar';
import HistorialVentas from './componentes/pages/historialVentas';
import HistorialEmpleados from './componentes/pages/historialEmpleados';
import HistorialCocinero from './componentes/pages/historialCocinero';
import HistorialMesero from './componentes/pages/historialMesero';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Login form={<FormAdmin/>} />}/>
        <Route path='/employe' element={<Login form={<FormEmploye/>}/>}/>
        <Route path='/admin/registro/*' element={<Registro/>}/>
        <Route path='/admin/registro/registro-personal' element={<Registro content={<RegistroPersonal/>}/>}/>
        <Route path='/admin/registro/pedidos-preparados' element={<Registro content={<PedidosPreparados/>}/>}/>
        <Route path='/admin/registro/historial-ventas' element={<Registro content={<HistorialVentas/>}/>}/>
        <Route path='/admin/registro/historial-empleados' element={<Registro content={<HistorialEmpleados/>}/>}/>
        <Route path='/admin/registro/pedidos-entregar' element={<Registro content={<PedidosEntregar/>}/>}/>
        <Route path='/admin/registro/historial-cocinero' element={<Registro content={<HistorialCocinero/>}/>}/>
        <Route path='/admin/registro/historial-mesero' element={<Registro content={<HistorialMesero/>}/>}/>
        <Route path='/bienvenida' element={<Bienvenida/>}/>
        <Route path='/' element={<Bienvenida/>}/>
      </Routes>
    </div>      
  );
}

export default App;
