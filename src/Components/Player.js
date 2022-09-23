import React, { useState } from 'react';
import logo  from './assets/images/logo.png';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Shyam_Mela_Mein_Le_Chaalu from '../Components/assets/music/Babulal Sharma/Shyam_Mela_Mein_Le_Chaalu.mp3';


const Player = () => {
  const musicTracks = [
   
    {
      name: 'Once Again',
      src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    },
    
    {
      name: 'Shyam Ko Pukaro Dil Se',
      src: Shyam_Mela_Mein_Le_Chaalu
    }
    // {
    //   name: 'Sweet',
    //   src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
    // },
    // {
    //   name: 'Love',
    //   src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    // },
    // {
    //   name: 'Piano Moment',
    //   src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
    // },
    // {
    //   name: 'E.R.F',
    //   src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
    // },
    // {
    //   name: 'Dreams',
    //   src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    // },
    // {
    //   name: 'A Day To Remember',
    //   src: 'https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music',
    // },
    // {
    //   name: 'Adventure',
    //   src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
    // },
    // {
    //   name: 'Photo Album',
    //   src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
    // },
    // {
    //   name: 'November',
    //   src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
    // },
  ];
  const [trackIndex, setTrackIndex] = useState(0);
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (
    <div className='playertwo'>
      <AudioPlayer
        // style={{ borderRadius: '1.5rem' }}
        autoPlay
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log('onPlay')}
        showSkipControls={true}
        showJumpControls={true}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
};
export default Player;