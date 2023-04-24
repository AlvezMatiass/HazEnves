import React, {useState, useRef} from 'react'
import ReactPlayer from 'react-player'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill, BsArrowClockwise } from "react-icons/bs";

const Presentacion = () => {

  const [muted, setMuted] = useState(false)

  function handleToggleMute() {
    setMuted(!muted)
  }

  const playerRef = useRef(null);

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url='./img/haz&envés.mp4'
        playing
        loop
        width='100%'
        height='100%'
        autoPlay
        volume={muted ? 0 : 0.1}
      />
      <div className='botonContainer'>
        <button className='presentacionBotonMuted' onClick={handleToggleMute}>
          {muted ? <BsFillVolumeMuteFill /> : <BsFillVolumeDownFill />}
        </button>
        <button className='presentacionBotonMuted' onClick={handleRestart}> <BsArrowClockwise /> </button>
      </div>
      
    </div>
  )
}

export default Presentacion