import './registroProductos.scss';
import VistaPrevia from './components/vistaPrevia/vistaPrevia';
import NavListProducts from './components/navListProducts/navListProducts';
import ListProducts from './components/listProducts/listProducts';

function RegistroProductos() {
  const categorias = [{ categoria: 'Bebidas Frías' }, { categoria: 'Bebidas Calientes' }, { categoria: 'Complementos' }, { categoria: 'Hamburguesas' }];

  return (
    <section className="marginFlex">
      <div className="contenedorProductos">
        <div>
          <NavListProducts /><br/>
          <ListProducts />
        </div>
        <div className="title">
          <h1>REGISTRO DE PRODUCTOS</h1>
          <from>
            <label>
              <p>Nombre</p>
              <input
                id="nombreProducto"
                name="nombreProducto"
                type="text"
                required
                maxLength="25"
              />
            </label>
            <div className="contenedorProductosInterno">
              <label>
                <p>Precio</p>
                <input
                  id="nombreProducto"
                  name="nombreProducto"
                  type="text"
                  required
                  maxLength="25"
                />
              </label>
              <label>
                <p>Categoría</p>
                <select
                  id="categoria"
                  name="categoria"
                >
                  {categorias.map((item, i) => (
                    <option key={`categoria${i}`} value={i}>
                      {' '}
                      {item.categoria}
                      {' '}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <p>Unidades por Plato</p>
                <input
                  id="nombreProducto"
                  name="nombreProducto"
                  type="text"
                  required
                  maxLength="25"
                />
              </label>
              <label>
                <p>Código</p>
                <input
                  id="nombreProducto"
                  name="nombreProducto"
                  type="text"
                  required
                  maxLength="25"
                />
              </label>
            </div>
            <label>
              <p>Descripción </p>
              <input
                id="nombreProducto"
                name="nombreProducto"
                type="text"
                required
                maxLength="25"
              />
            </label>
            <p>Vista Previa</p>
            <VistaPrevia />


            <div>
              <section className="btnsContainer gridResponsiveBtns">
                <button type="button" className="confirm__button">Confirmar</button>
                <button type="button" className="cancel__button">Cancelar</button>
              </section>
            </div>
          </from>
        </div>
      </div>
    </section>
  );

}
export default RegistroProductos;
