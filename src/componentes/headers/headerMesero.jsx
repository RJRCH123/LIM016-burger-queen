// import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

// import icons from react icons
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import LogoMesero from '../../img/iconos/mesero.png';
import BH from '../../img/iconos/botton-home.png';
import BS from '../../img/iconos/botton-salir.png';

// import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./headers.scss";


const HeaderMesero = () => {
  
    // create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    // create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    // condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <section id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (<FiArrowRightCircle/>) : (<FiArrowLeftCircle/>)}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <div className='dataUser'>
                <img className="logoRol" src={LogoMesero} alt= "logoMesero"/>
              </div>
              <div className='dataUser'>
                <h4>NOMBRE</h4>
                <p>MESERO</p>
              </div>
              <MenuItem icon={
                <Link to='/mesero/realizar-pedido'><h1 className="logoNames">RP</h1></Link>}>
                  <Link to='/mesero/realizar-pedido'>Realizar Pedido</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/mesero/pedidos-entregar'><h1 className="logoNames">PE</h1></Link>}>
                  <Link to='/mesero/pedidos-entregar'>Pedidos por Entregar</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/mesero/historial-pedidos'><h1 className="logoNames">HP</h1></Link>}>
                  <Link to='/mesero/historial-pedidos'>Historial de pedidos</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem active={true} icon={
                <Link to='/mesero/registro/'><img src={BH} alt= "BH"/></Link>}>
                  <Link to='/mesero/registro/'>Inicio</Link>
              </MenuItem>
              <MenuItem icon={
                <Link to='/'><img src={BS} alt= "BS"/></Link>}>
                  <Link to='/'>Cerrar Sesión</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </section>
    </>
  );
};

export default HeaderMesero;
