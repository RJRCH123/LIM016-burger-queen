import React  from 'react';
import './listProducts.scss';
import { images } from '../../constans/index';
import { db } from '../../../../../firebase/firebase-config';
import {
  getDocs, collection, query, orderBy
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function ListProducts() {
	const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = [];
    const productsRef = query(collection(db, 'productos'), orderBy('tipo'));
    const data = await getDocs(productsRef);
    data.docs.forEach((doc) => {
      const values = doc.data();
      allProducts.push({
        id: doc.id,
        name: values.name.toUpperCase(),
        codigo: values.codigo.toUpperCase(),
        descripcion: values.descripcion,
        tipo: values.tipo,        
        precio: values.precio,
				img: values.img, 
				undsPorPlato: values.undsPorPlato
      });
    });
    return allProducts;
  };

  useEffect(() => {
    getProducts().then((allProducts) => {
      setIsLoading(false);
      setProducts(allProducts);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div />
    );
  }

	return (
		<section className="gridResponsivePPM">
			{products.map((product, index) => (
				<div className="DataPorProductoMenu" key={index}>
					<div className="imagenProducto">
          <button
              className="btnInfo"
              onClick={() => Swal.fire({
                html:
                  `<article class="modalDescripcion">
                    <section class="imgInfo">
                      <img src=${product.img} alt="producto" />
                    </section>
                    <section class="tittleInfo">
                      <h3>DESTALLES DEL PRODUCTO</h3>
                    </section>
                    <section class="nameInfo">
                      <h5>${product.name.toUpperCase()}</h5>
                    </section>
                    <section class="precioInfo">
                      <h6>S/. ${product.precio}0</h6>
                    </section>
                    <section class="detailsInfo">
                      <p> <strong> Código: </strong> ${product.codigo} </p>
                      <p> <strong> Categoría: </strong> ${product.tipo.toUpperCase()} </p>
                      <p> <strong> Descripción: </strong> ${product.descripcion} </p>
                      <p> <strong> Unds. por Plato: </strong> ${product.undsPorPlato} </p>
                    </section>
                  </article>`,
                width: '60%',
                allowOutsideClick: false,
                stopKeydownPropagation: false,
                showCloseButton: true,
                showConfirmButton: false,
                closeButtonAriaLabel: 'cerrar alerta',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
              })}
              type="button"
            >
              <img src={images.informacion} alt="" />
            </button>		  
					  <img src={product.img} alt="producto" />
					</div>
					<div className="nombrePrecio">
						<p>
							{' '}
							{product.name.toUpperCase()}
							{' '}
						</p>
						<p>
							S/.
							{product.precio}
							0
						</p>
					</div>
					<div className="containerButton">
            <button type="button" className="buttonDelete"><img src={images.editarProductCard} alt='editar'/></button>
						<button type="button" className="buttonEdit"><img src={images.eliminar} alt='eliminar'/></button>
          </div>					
				</div>
			))}
		</section>
	);
}

export default ListProducts;
