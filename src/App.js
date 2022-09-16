import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import './Components/assets/css/style.css'
import Trending from './pages/Trending';



function App() {
  return (
    <div className="App">
     
     <Router>
     {/* <Header /> */}
     <Trending/>
      <div className='topMargin'>
        <Routes>  
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
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
