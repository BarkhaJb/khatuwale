import React from 'react';
import logo  from './assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navigation">
       <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="logo-box" to='' ><img src={logo} className="logoimg"  /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <form class="form-inline my-2 my-lg-0 navbar-search">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link to='/Top-Artist' className="nav-link" >Top Artists</Link>
      </li>
      <li className="nav-item">
      <Link to='/Trending' className="nav-link"> Trending Bhajans</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to='/Service' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Top 10 Bhajans
        </Link>
        <div className="dropdown-menu service-drop" aria-labelledby="navbarDropdown">
        <Link to='' className="dropdown-item nav-link service-menu">REGULAR CLEANING</Link>
        <Link to='' className="dropdown-item nav-link service-menu" >DEEP CLEANING</Link>
        <Link to='' className="dropdown-item nav-link service-menu">POST CONSTRUCTION</Link>
        <Link to='' className="dropdown-item nav-link service-menu">CLEANING</Link>
        <Link to='' className="dropdown-item nav-link service-menu" >MONE IN / OUT CLEANING</Link>
        <Link to='' className="dropdown-item nav-link service-menu" >OFFICE CLEANING</Link>
        <Link to='' className="dropdown-item nav-link service-menu" >CONSTRUCTION</Link>
        <Link to='' className="dropdown-item nav-link service-menu" >PROTECTION</Link>
        </div>
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
