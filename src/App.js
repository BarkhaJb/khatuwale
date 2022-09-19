import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import './Components/assets/css/style.css'
import Home from './pages/Home';
import Trend from './pages/Trending';
import Artist from './pages/Top-Artist';


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
            {/* <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Book' element={<Book />} /> */}
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
