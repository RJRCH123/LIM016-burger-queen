import images from './images';

const wines = [
  {
    title: 'KARMA DOBLE',
    price: 'S/. 16.90',
    tags: 'Hambueguesas de Carne Doble | Blend de Quesos | Huevo | Papas| Ensalada | Salsas Clásicas ', 
  },
  {
    title: 'DULCE VENGANZA',
    price: 'S/. 17.90',
    tags: 'Hambueguesas de Carne bañadas con salsa BBQ | Blend de Quesos | Jamón | Papas| Ensalada | Salsas Clásicas',
  },
  {
    title: 'SIN KARMA',
    price: ' S/. 17.90',
    tags: 'Hamburguesas Vegetarianas a base de Lenteja y Quinoa | Queso Mozarela a base de leche de Almendras | Papas| Ensalada | Salsas Clásicas', 
  },
];

const cocktails = [
  {
    title: 'MANGO FROZEN',
    price: 'S/. 9.90',
    tags: ' Mango Rapoza| 500 ml',
  },
  {
    title: "MARACUYÁ FROZEN",
    price: ' S/. 8.90',
    tags: 'Maracuyá Peroba | 500 ml',
  },
  {
    title: 'LIMONADA FROZEN',
    price: ' S/. 8.90',
    tags: 'Limón Verna| 500 ml',
  },
  {
    title: 'EMOLIENTE',
    price: 'S/. 6.90',
    tags: '500 ml',
  },
  {
    title: 'EXPRESO',
    price: 'S/. 5.90',
    tags: 'Café Borbón | 300 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Isabel Rodriguez',
    subtitle: 'Destacada por su admirable desempeño junto a los comensales.',
  },
  {
    imgUrl: images.award01,
    title: 'Enrique Diaz',
    subtitle: 'Destacado por sus innovadores propuestas en la cocina.',
  },
  {
    imgUrl: images.award05,
    title: 'Mónica Hernandez',
    subtitle: 'Destacada por sus grandes resultados en las encuestas hechas a los comensales.',
  },
  {
    imgUrl: images.award03,
    title: 'Paolo Córdova',
    subtitle: 'Destacado por su increíble rapidez en la cocina.',
  },
];

export default { wines, cocktails, awards };