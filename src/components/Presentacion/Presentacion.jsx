import React, {useState, useRef} from 'react'
import ReactPlayer from 'react-player'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill, BsArrowClockwise } from "react-icons/bs";

const Presentacion = () => {

  const [volume, setVolume] = useState(true);

  const handleToggleVolume = () => {
    if (volume === false) {
      setVolume(true);
    } else {
      setVolume(false);
    }
  };

  const playerRef = useRef(null);

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  };

  return (
    <div className='videoRepre'>
      <ReactPlayer
        ref={playerRef}
        url='./img/haz&envés.mp4'
        playing={true}
        loop={true}
        muted={volume}
        height= '100%'
        width= '100%'
      />
      <div className='botonContainer'>
        <button className='presentacionBotonMuted' onClick={handleToggleVolume}>
          {volume ? <BsFillVolumeMuteFill /> : <BsFillVolumeDownFill />}
        </button>
        <button className='presentacionBotonMuted' onClick={handleRestart}> <BsArrowClockwise /> </button>
      </div>
      
    </div>
  )
}

export default Presentacion