import React from 'react'

const Presentacion = () => {
  return (
    <div className='video'>
        <video autoPlay loop muted onLoadedData={() => console.log('Video cargado correctamente')}>
          <source src='.\img\haz&envés.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}

export default Presentacion