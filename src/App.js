import React,{useCallback,useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Menu from './Components/Header'
import './Components/assets/css/style.css'
import Home from './pages/Home';
import Trend from './pages/Trending';
import Artist from './pages/Top-Artist';
import TopBhajan from './pages/Top10-Bhajan';
import Player from './Components/Player';
import Latest from './pages/latest';
import Category from './pages/Category';
import TopPlaylist from './pages/topPlaylist';
import NewReleases from './pages/NewReleases';
import SearchContent from './pages/search'


function App() {
  const [musicTracks, setMusicTracks] = useState([
    {
      id: 1,
      name: ' Haare Ke Sahare Aaja',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/Hare-Ka-Sahara-Aaja.mp3',
    },
    {
      id: 2,
      name: 'Najre Jara Mila Le',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/Superhit_Offici_getmp3.pro_.mp3',
    },
    {
      id: 3,
      name: 'Mera Shyam Bada Albela',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/getmp3.pro-25.mp3',
    },
    
  ]);
  const [releaseSong, setReleaseSong] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentArtist, setCurrentArtist] = useState(null);
  const fetchSongs = () => {
    const url = 'https://khatu-wale-api.herokuapp.com/playlist/songs/6332be119778905b2cd45a83';
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
     <Menu  setCurrentArtist={setCurrentArtist} />
     {/* <Trending/>
     <Newsong/> */}
      <div className='topMargin'>
        <Routes>  
          <Route path='/' element={<Home    setTrackIndex={setTrackIndex}  releaseSong={releaseSong}
                  fetchSongs={fetchSongs}
                  setReleaseSong={setReleaseSong}
                  setCurrentArtist={setCurrentArtist} />} />
          <Route path='/Trending' element={<Trend  setMusicTracks={setMusicTracks}
                  fetchSongs={fetchSongs}
                  setTrackIndex={setTrackIndex}/>} />
          <Route path='/search' element={<SearchContent  setTrackIndex={setTrackIndex} setMusicTracks={setMusicTracks}/>} />
           <Route path='/Top-Artist' element={<Artist releaseSong={releaseSong}
                  currentArtist={currentArtist}
                  setMusicTracks={setMusicTracks}
                  setDefaultMusic={setDefaultMusic}
                  setTrackIndex={setTrackIndex} />} />
          <Route path='/TopBhajan' element={<TopBhajan  />} />
          <Route path='/Category' element={<Category currentArtist={currentArtist}
                  setTrackIndex={setTrackIndex}
                  fetchSongs={fetchSongs}
                  setMusicTracks={setMusicTracks} />} />
          <Route path='/latestsong' element={<Latest />} />
          <Route
              path='/newReleases'
              element={
                <NewReleases
                  setMusicTracks={setMusicTracks}
                  fetchSongs={fetchSongs}
                  setTrackIndex={setTrackIndex}
                />}
            />
            <Route
              path='/TopPlaylist'
              element={
                <TopPlaylist
                  currentArtist={currentArtist}
                  setTrackIndex={setTrackIndex}
                  fetchSongs={fetchSongs}
                  setMusicTracks={setMusicTracks}
                />}
            
            />
              
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
