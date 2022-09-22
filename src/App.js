import React from 'react';
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

function App() {
  return (
    <div className="App">
     
     <Router>
     <Header />
     {/* <Trending/>
     <Newsong/> */}
      <div className='topMargin'>
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/Trending' element={<Trend />} />
           <Route path='/Top-Artist' element={<Artist />} />
          <Route path='/TopBhajan' element={<TopBhajan />} />
                     {/* <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Book' element={<Book />} /> */}
        </Routes>
        </div>
        <Footer />
        <Player />
      </Router>
    </div>
  );
}

export default App;
