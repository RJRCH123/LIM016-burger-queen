import "./registroProductos.scss";
import NavListProducts from "./components/navListProducts/navListProducts";
import ListProducts from "./components/listProducts/listProducts";
import FormProducto from "./components/formProducto/formProducto";
import VistaPrevia from "./components/vistaPrevia/vistaPrevia";
import BtnsConfirmarYCancelar from "./components/btnsConfirmarYCancelar/btnsConfirmarYCancelar";

function RegistroProductos() {
  return (
    <section className="marginFlex">
      <div class="contenedorProductos">
        <div class="navFiltradoProductos">
          <NavListProducts /> 
          <br/>
        </div>
        <div class="listaProductosCrud">
          <ListProducts />
        </div>
        <div class="formProductos">
          <FormProducto />
        </div>
        <div class="vistaPreviaProducto">
          <VistaPrevia />
        </div>
        <div class="btnsConfirmarYCancelar">
          <BtnsConfirmarYCancelar />
        </div>
      </div>
    </section>
  );
}
export default RegistroProductos;
