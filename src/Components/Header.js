// import React,{useState,useEffect} from 'react'
// import logo from "./assets/images/logo.png";
// import { Link } from "react-router-dom";
// import toggel from "./assets/images/toggel.png";
// import { Navbar, Nav} from "react-bootstrap";
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [scroll, setScroll] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//    useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY > 50);
//     });
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="navigation">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="logo-n-toggle">
//             <div className="logo">
//               {" "}
//               <Link className="logo-box" to="">
//                 <img src={logo} className="logoimg" />
//               </Link>
//             </div>
//             <div className="toggle-btn">
//               {" "}
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
            
//                 <img src={toggel} className="" />
//               </button>
//             </div>
//           </div>
//           <form class="form-inline my-2 my-lg-0 navbar-search">
//             <input
//               class="form-control mr-sm-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </form>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item dropdown">
//                 <Link
//                   to="/"
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Top Artists
//                 </Link>

//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <Link to="/Trending" class="dropdown-item">
//                     Sanjay Mittal
//                   </Link>
//                   <Link to="/Trending" class="dropdown-item">
//                     Kanhya Mittal
//                   </Link>
//                   <Link to="/Trending" class="dropdown-item">
//                     Nandu Maharaj
//                   </Link>
//                   <Link to="/Trending" class="dropdown-item">
//                     Shubham Rupam
//                   </Link>
//                 </div>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Trending" className="nav-link">
//                   {" "}
//                   Trending Bhajans
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/TopBhajan" className="nav-link">
//                   {" "}
//                   Top 10 Bhajans
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="latestsong" className="nav-link">
//                   Latest Release
//                 </Link>
//               </li>
              
      
    
      
   
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
// export default Header;


import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
 import logo from "./assets/images/logo.png";
 import toggel from "./assets/images/toggel.png";
 import { Link } from "react-router-dom";
//  import toggel from "./assets/images/toggel.png";

const Menu = () => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);

   useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


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
              <NavLink  to="/Trending"
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

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/Trending" class="dropdown-item">
                    Sanjay Mittal
                  </Link>
                  <Link to="/Trending" class="dropdown-item">
                    Kanhya Mittal
                  </Link>
                  <Link to="/Trending" class="dropdown-item">
                    Nandu Maharaj
                  </Link>
                  <Link to="/Trending" class="dropdown-item">
                    Shubham Rupam
                  </Link>
                </div>
              </li>

              <li className="nav-item">
              <NavLink  to="/Trending"  className="nav-link">
                  {" "}
                  Trending Bhajans
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink  to="/TopBhajan" className="nav-link">
                  {" "}
                  Top 10 Bhajans
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink  to="/Trending"className="nav-link">
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