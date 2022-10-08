import React, { useState } from 'react';


import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const Player = ({ musicTracks, trackIndex, setTrackIndex ,player}) => {

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
        ref={player}
        
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log('onPlay')}
        showSkipControls={true}
        showJumpControls={true}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={()=> handleClickPrevious()}
        onClickNext={() => handleClickNext()}
        onEnded={handleClickNext}
      />
    </div>
  );
};
export default Player;