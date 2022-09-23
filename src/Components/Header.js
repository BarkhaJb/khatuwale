import React from 'react';
import logo  from './assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
       <div className="container-fluid">
    <div className="navigation">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='logo-n-toggle'>
   <div className='logo'> <Link className="logo-box" to='' ><img src={logo} className="logoimg"  /></Link></div>
 <div className='toggle-btn'> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>
  </div>
  <form class="form-inline my-2 my-lg-0 navbar-search">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    <ul className="navbar-nav mr-auto">



       <li className="nav-item dropdown">
       <Link to='/'  className="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
       Top Artists
        </Link>
       
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Sanjay Mittal</a>
          <a class="dropdown-item" href="#">Kanhya Mittal</a>
          <a class="dropdown-item" href="#">Nandu Maharaj</a>
          <a class="dropdown-item" href="#">Shubham Rupam</a>
        </div>
      </li>
      
      <li className="nav-item">
      <Link to='/Trending' className="nav-link"> Trending Bhajans</Link>
      </li>
      <li className="nav-item">
      <Link to='/TopBhajan' className="nav-link"> Top 10 Bhajans</Link>
      </li>
      <li className="nav-item">
      <Link to='/contact' className="nav-link">Latest Release</Link>
      </li>
{/*       
      <Link to='/Book'><button className="bookbtn">BOOK NOW</button></Link>
    
      <Link to='/Book'><button className="bookbtn">BOOK NOW</button></Link>
       */}
    
    </ul>
   
  </div>
</nav>
</div>
</div>
  );
};
export default Header;
