import React from 'react';

const Participacion = () => {
  return (
    <div className='distinciones'>
        <p className='disTitulo'>Distinciones</p>
        <div className='distinDisplay'>
          <div>
            <div className='puroDiseContainer'>
              <img src="./img/purodise.png" alt="" className='puroDise'/>
              <p className='indPremio'>Premio en Indumentaria</p>
            </div>
            <p className='year'>2014</p>
          </div>
          <div>
            <img src="/img/logonotexto.png" alt="" className='logoDistin'/>
          </div>
          <div>
            <img src="./img/sellobuen.png" alt="" className='selloBuen'/>
            <p className='year yearMovi'>2014</p>
          </div>
        </div>
    </div>
  )
}

export default Participacion