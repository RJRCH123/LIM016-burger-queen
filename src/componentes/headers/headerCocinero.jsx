//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import LogoCocinero from '../../img/iconos/chefCocinero.png';
import BH from '../../img/iconos/botton-home.png';
import BS from '../../img/iconos/botton-salir.png';
import PuntoNegro from '../../img/iconos/puntoNegro.png';

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./headers.scss";


const HeaderCocinero = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <div className='dataUser'>
                <img className="logoRol" src={LogoCocinero} alt= "logoCocinero"/>
              </div>
              <div className='dataUser'>
                <h4>NOMBRE</h4>
                <p>JEFE DE COCINA</p>
              </div>
              <MenuItem icon={
                <Link to='/cocinero/pedidos-por-preparar'><h1 className="logoNames">NP</h1></Link>}>
                  <Link to='/cocinero/pedidos-por-preparar'>Nuevos Pedidos</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/cocinero/pedidos-preparados'><h1 className="logoNames">PP</h1></Link>}>
                  <Link to='/cocinero/pedidos-preparados'>Pedidos Preparados</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/cocinero/historial-pedidos'><h1 className="logoNames">HP</h1></Link>}>
                  <Link to='/cocinero/historial-pedidos'>Historial de pedidos</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem active={true} icon={
                <Link to='/cocinero/registro'><img src={BH} alt= "BH"/></Link>}>
                  <Link to='/cocinero/registro'>Inicio</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/'><img src={BS} alt= "BS"/></Link>}>
                  <Link to='/'>Cerrar Sesión</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default HeaderCocinero;

