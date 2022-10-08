import React,{useState, useEffect}  from "react";
import radioimg from '../Components/assets/images/radioimg.png'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Radio = ({
  
    setMusicTracks,
    setTrackIndex,
    audiofunction,
    setPlaylist
  }) =>{
    const [allSong, setAllSong] = React.useState([]);
    const [radio, setRadio] = React.useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    


    useEffect(() => {
      
      const url = `http://localhost:3100/songs`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
        
          console.log('CONSOLE', json);
          const parsedDataTwo = json.map((item) => {
            return { src: item.song, name: item.track, id: item._id };
          });
          console.log('PARSED', parsedDataTwo);
          setMusicTracks(parsedDataTwo);
          setRadio(json);
        })
  
        .catch((error) => console.log(error));
    }, []);
  
      


  return (
<div className="araeaaaa">
      <div className="radio-img">
          <img src={radioimg} />
          </div>
          <div className='trndbtn'>
              <button className='footer-btn' 
               onClick={() => {
                  const play = audiofunction();
                  if (play) {
                    setIsPlaying(false);
                  } else {
                    setIsPlaying(true);
                  }
                }}>
               {isPlaying === true ? 'Play' : 'Pause'}
              </button>
            </div>
      
</div>

  );
              }


export default Radio;