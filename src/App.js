import React from "react";
import {
  Routes, 
  Route
} from "react-router-dom";
import Bienvenida from "./componentes/bienvenida/Bienvenida";
import Login from './componentes/login/login';
import FormAdmin from "./componentes/login/loginFormAdm";
import FormEmploy from "./componentes/login/loginFormEmploy"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Login form={<FormAdmin/>} />}/>
        <Route path='/employe' element={<Login form={<FormEmploy/>}/>}/>
        <Route path='/' element={<Bienvenida/>}/>
      </Routes> 
    </div>
  );
}

export default App;
