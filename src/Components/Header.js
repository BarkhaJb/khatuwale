


import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
 import logo from "./assets/images/logo.png";
 import toggel from "./assets/images/toggel.png";
 import { Link } from "react-router-dom";
 import { useNavigate } from 'react-router-dom'
 import { useLocation } from 'react-router-dom';
//  import toggel from "./assets/images/toggel.png";

const Menu = ({ setCurrentArtist, searchAPI }) => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [artist, setArtist] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate()
   useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  useEffect(() => {
    const url = 'https://khatu-wale-api.herokuapp.com/artist/songs';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArtist(json))
      .catch((error) => console.log(error));
  }, []);

  const MoveToTopArtist = (user) => {
    console.log('navigating artist', user);
    setCurrentArtist(user);
    navigate('/Top-Artist');
  };

  const SearchSongs = () => {
    // yaha pe call method
    searchAPI(searchValue);
    navigate('/search', { state: searchValue });
  };

  return (
    <div className="container-fluid">
            <div className="navigation">
          <Navbar expand="lg" expanded={expanded} className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
        <div className="logo-n-toggle">
             <div className="logo">
              {" "}
              <Link className="logo-box" to="">            
                  <img src={logo} className="logoimg" />        
                         </Link>          
             </div>
      
          </div>
          <form class="form-inline my-2 my-lg-0 navbar-search">
             <input
              class="form-control mr-sm-2"
              type="search"
               placeholder="Search"
             aria-label="Search"
           />
        </form>
        <Navbar.Toggle aria-controls='responsive-na' onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse>
       
          <Nav onClick={() => setExpanded(false)}>
          <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
              <NavLink  to=""
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Top Artists
                </NavLink>

                <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                      {artist.map((user) => (
                        <ul>
                          <li
                            onClick={() => MoveToTopArtist(user)}
                            class='dropdown-item'
                          >
                            {user.artist}
                          </li>
                        </ul>
                      ))}
                </div>
              </li>

              <li className="nav-item">
              <NavLink  to="/Trending"  className="nav-link">
                  {" "}
                  Trending Bhajans
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink  to="/Trending" className="nav-link">
                  {" "}
                  All Bhajans
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink  to="/newReleases"className="nav-link">
                  Latest Release
                </NavLink>
              </li>
              
      
    
      
   
            </ul>
          
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
</div>
  )
}

export default Menu