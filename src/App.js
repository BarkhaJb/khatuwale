import React,{useCallback,useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import './Components/assets/css/style.css'
import Home from './pages/Home';
import Trend from './pages/Trending';
import Artist from './pages/Top-Artist';
import TopBhajan from './pages/Top10-Bhajan';
import Player from './Components/Player';
import Latest from './pages/latest';
import Category from './pages/Category';



function App() {
  const [musicTracks, setMusicTracks] = useState([
    {
      id: 1,
      name: 'Sunny',
      src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    },
    {
      id: 2,
      name: 'Tenderness',
      src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3',
    },
    {
      id: 3,
      name: 'Once Again',
      src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    },
    {
      id: 4,
      name: 'Sweet',
      src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
    },
    {
      id: 5,
      name: 'Love',
      src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    },
    {
      id: 6,
      name: 'Piano Moment',
      src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
    },
    {
      id: 7,
      name: 'E.R.F',
      src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
    },
    {
      id: 8,
      name: 'Dreams',
      src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    },
    {
      id: 9,
      name: 'A Day To Remember',
      src: 'https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music',
    },
    {
      id: 10,
      name: 'Adventure',
      src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
    },
    {
      id: 11,
      name: 'Photo Album',
      src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
    },
    {
      id: 12,
      name: 'November',
      src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
    },
  ]);
  const [releaseSong, setReleaseSong] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentArtist, setCurrentArtist] = useState(null);
  const fetchSongs = () => {
    const url = 'https://khatu-wale-api.herokuapp.com/songs';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setReleaseSong(json))
      .catch((error) => console.log(error));
  };
  const setDefaultMusic = useCallback(() => {
    if (releaseSong && releaseSong?.length > 0) {
      const parsedData = releaseSong.map((item) => {
        return { src: item?.song, name: item?.track, id: item?._id };
      });

      setMusicTracks(parsedData);
    }
  }, [releaseSong]);

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    
    <div className="App">
     
     <Router>
     <Header />
     {/* <Trending/>
     <Newsong/> */}
      <div className='topMargin'>
        <Routes>  
          <Route path='/' element={<Home releaseSong={releaseSong}
                  fetchSongs={fetchSongs}
                  setReleaseSong={setReleaseSong}
                  setCurrentArtist={setCurrentArtist} />} />
          <Route path='/Trending' element={<Trend  setMusicTracks={setMusicTracks}
                  fetchSongs={fetchSongs}
                  setTrackIndex={setTrackIndex}/>} />
           <Route path='/Top-Artist' element={<Artist releaseSong={releaseSong}
                  currentArtist={currentArtist}
                  setMusicTracks={setMusicTracks}
                  setDefaultMusic={setDefaultMusic}
                  setTrackIndex={setTrackIndex} />} />
          <Route path='/TopBhajan' element={<TopBhajan  />} />
          <Route path='/Category' element={<Category  />} />
          <Route path='/latestsong' element={<Latest />} />
                     {/* <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Book' element={<Book />} /> */}
        </Routes>
        </div>
        <Footer />
        <Player  musicTracks={musicTracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}/>
      </Router>
    </div>
  );
}

export default App;
