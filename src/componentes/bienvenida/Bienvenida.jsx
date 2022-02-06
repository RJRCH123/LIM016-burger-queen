import React from 'react'

import {
  AboutUs,
  Footer,
  Header,
  Laurels,
  SpecialMenu
} from './container'
import { Navbar } from './components'
import './Bienvenida.css';

const Bienvenida = () => (
  <div>
    <Navbar />
    <Header />
    {/* Comentar para el martes */}
    <AboutUs />
    <SpecialMenu />
    <Laurels />
    <Footer />
  </div>
)

export default Bienvenida
