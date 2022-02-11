import { TYPES } from '../actions/shoppingActions';
import { images } from '../constans/index';
export const shoppingInitialState = {
  products: [
    {
      codigo: "H001" ,
      name: "Karma Clásico",
      tipo: "Hamburguesas",
      imagen: images.KarmaClasica,
      unidades: 4,
      descripcion:" Hamburguesas de Hamburguesas + Papas + Ensalada +  Salsas Clásicas",
      precio: 12.90
    },
    {
      codigo: "H002" ,
      name: "Extra Karma",
      tipo: "Hamburguesas",
      imagen: images.ExtraKarma,
      unidades: 4,
      descripcion: "Hamburguesas de Hamburguesas + Blend de Quesos + Papas + Ensalada  +  Salsas Clásicas",
      precio: 14.90
    },
    {
      
      codigo: "H003" ,
      name: "Karma Doble",
      tipo: "hamburguesas",
      imagen: images.KarmaDoble,
      unidades: 4,
      descripcion: "Hamburguesas de Hamburguesas Doble + Blend de Quesos + Huevo + Papas + Ensalada + Salsas Clásicas",
      precio: 16.90
    },
    {
      
      codigo: "H004" ,
      name: "La Inflamable",
      tipo: "Hamburguesas",
      imagen: images.LaInflamable,
      unidades: 3,
      descripcion: "Hamburguesas de Hamburguesas bañadas con salsa picante Cajú  + Jamón  + Blend de Quesos + Papas + Ensalada + Salsas Clásicas",
      precio: 17.90
    },
    {
      
      codigo: "H005" ,
      name: "Dulce Venganza",
      tipo: "Hamburguesas",
      imagen: images.DulceVenganza,
      unidades: 4,
      descripcion: "Hamburguesas de Hamburguesas BAÑADAS CON SALSA BBQ  + Jamón +  Blend de Quesos + Papas + Ensalada + Salsas Clásicas",
      precio: 17.90
    },
    {
      
      codigo: "H006" ,
      name: "Sin Karma",
      tipo: "Hamburguesas",
      imagen: images.SinKarma,
      unidades: 3,
      descripcion: "Hamburguesas a base de Lenteja y Quinoa + Queso Mozarela a base de Almendras + Papas + Ensalada + Salsas Clásicas",
      precio: 12.90
    },
    {
      
      codigo: "H007" ,
      name: "La Inocente",
      tipo: "Hamburguesas",
      imagen: images.LaInocente,
      unidades: 4,
      descripcion: "Hamburguesas de Hamburguesas + Cebolla Caramelizada + PIÑA + Jamón  + Papas + Ensalada + Salsas Clásicas" ,
      precio: 18.90
    },
    {
      
      codigo: "H008" ,
      name: "El Culpable",
      tipo: "Hamburguesas",
      imagen: images.ElCulpable,
      unidades: 4,
      descripcion: "Hamburguesas de Hamburguesas + Jamón + Blend de Quesos + Tocino + Huevo  + Papas + Ensalada + Salsas Clásicas",
      precio: 18.90
    }
  ],
  cart:[],
};

export function shoppingReducer(state,action) {
  switch(action.type){
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((product) => product.codigo === action.payload);
      console.log(newItem);

      return {
        ...state,
        cart: [...state.cart, newItem]
      }
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      
    }
    case TYPES.CLEAR_CART: {
      
    }
  default:
  return state;
  }
}

