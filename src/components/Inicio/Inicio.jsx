import React from 'react'

const Inicio = () => {
  return (
    <div>
        <header className="header">
          <li><a href="">Inicio</a></li>
          <li><a href="#2">Sobre Nosotros</a></li>
          <li><a href="#3">Proceso</a></li>
          <li><a href="#4">Nuestros Servicios</a></li>
        </header>

        <main className="main">
            <img src=".\img\logo.png" alt=""></img>
        </main>

        <div className="whatsapp">
          <a href="">
            <img src=".\img\whatsappverde.png" alt=""></img>     
          </a>
        </div>
    </div>
  )
}

export default Inicio