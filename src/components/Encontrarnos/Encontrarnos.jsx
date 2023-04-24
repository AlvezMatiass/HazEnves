import React from 'react'
import { useState } from 'react';

const Encontrarnos = () => {
  
  const [texto, setTexto] = useState("Texto original");

  const handleClick = () => {
    setTexto("Direccion: Salame 3 entre jose antonio 20 y jose julio 1200");
    document.querySelector(".imgFondoTexto").classList.toggle("clicked");
  };

  return (
    <div id='4' className='encontrarnos'>
      <div className="encontrarnosContainer">
        <div className="encoTituloContainer">
          <p className='encoTitulo'>Podemos Encontrarnos...</p>
        </div>
        <div className='imgContainer'>
          <img src="./img/ropaRama.png" alt="" className='ramaImg'/>
          <div className="cuatroImgContainer">
            <div className='pruebaFondoNashe' onClick={handleClick}>
              <p className='imgFondoTexto'>{texto}</p>
            </div>
            <div className='pruebaFondoNashe'>
              <p>Reciclando tu prenda</p>
            </div>
            <div className='pruebaFondoNashe'>
              <p>Reciclando tu prenda</p>
            </div>
            <div className='pruebaFondoNashe'>
              <p>Reciclando tu prenda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Encontrarnos;