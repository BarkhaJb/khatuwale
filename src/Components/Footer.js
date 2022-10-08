import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    const[category,setCategory]=useState([]);
    const [playlist, setPlaylist] = React.useState([]);
    useEffect(() => {
        const url = 'http://localhost:3100/category/songs';
        fetch(url)
          .then((response) => response.json())
          .then((json) => setCategory(json))
          .catch((error) => console.log(error));
      }, []);
      useEffect(() => {
        const url = 'http://localhost:3100/playlist';
        fetch(url)
          .then((response) => response.json())
          .then((json) => setPlaylist(json))
          .catch((error) => console.log(error));
      }, []);
  return (
 <div className="footer" >
<div className='container-fluid first-foo-para'>
        <div className='top-footer-para'>
            <h2>Hare Ka Sahara Baba Shyam Hamara</h2>
            <p>Kathin rah bhi saral ho jayegi mushkilen
sari hal ho jayegi ek bar aaja tu sharan
shyam ke zindagi teri safal ho jayegi,
Jay shree Shyam.
</p>
        </div>
        </div>
    <div className='container-fluid'>
        <div className='container'>
        <div className='footer-awsfnts'>
           <div className='footer-awsfnts-area'>
        <Link to='' className='anchor-foo'><button className='foot-btn-icon face'> <i className="fa fa-facebook" aria-hidden="true"></i></button></Link>
        <Link to='' className='anchor-foo'><button className='foot-btn-icon insta'><i className="fa fa-instagram" aria-hidden="true"></i></button></Link>
        <Link to='' className='anchor-foo'><button className='foot-btn-icon twitter'><i className="fa fa-twitter" aria-hidden="true"></i></button></Link>
        <Link to='' className='anchor-foo'> <button className='foot-btn-icon youtube'><i className="fa fa-youtube-play" aria-hidden="true"></i></button></Link>
           </div>
        </div>
        <div className='footer-para'>
            <ul  className='about-para'>
                <li className='about-para2 right-border'>Advertise on Khatushyam.com </li>
                <li className='about-para2 right-border'>Terms of Use</li>
                <li className='about-para2 right-border'>Privacy Policy </li>
                <li className='about-para2 right-border'>Partners</li>
                <li className='about-para2 right-border'>Sitemap </li>
                <li className='about-para2'>FAQ </li>
                </ul>
        </div>
 <div className='footer-content'>
    <div className='footer-album'>
       <div className='footer-menu1'>
      <div className='album-area'>
        <h4 className='foo-heading'>album</h4>
        <div className="menu1-content">
            <ul className='album-list'>
                {category.map((user)=>(
                <li className='album-item bullet'><Link to='/category' className='anchor-foo'>{user.title}</Link></li>
               
                ))}
                 </ul>
        </div>
        </div>
       </div>
    </div>
    <div className='footer-genres'>
     <div className='footer-menu2'>
        <div className='genres-area'>
        <h4 className='foo-heading'>genres</h4>
        <div className='menu2-content'>
            <ul className='genres-list'>
            {playlist.map((user) => (
               <li className='genres-item bullet'><Link to='/trending'  className='anchor-foo'>{user.title}</Link></li>
               
            ))}
            </ul>
        </div>
        </div>
     </div>
    </div>  
    <div className='footer-artist'>
     <div className='footer-menu3'>
        <h4 className='foo-heading'>artist</h4>
        <div className='menu3-content'>
            <ul className='artist-list'>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Kanhaiya Mittal </Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Lakhbir Singh Lakkha</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Raju Kumar Khandelwal</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Anjali Dewadi</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Jaya Kishori</Link></li>
              
            </ul>
        </div>
     </div>
    </div>
    <div className='footer-release'>
        <div className='footer-menu4'>
            <h4 className='foo-heading'>release</h4>
            <div className='menu4-content'>
                <ul className='release-list'>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Baba Aayega</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Sanware ki God Main</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Kar Shyam ko Yaad</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Khatu se Bulawa Aayega</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Shyam Milega</Link></li>
               
                </ul>
            </div>
        </div>

    </div>     
 </div>
 </div>
 <div className='bottom-footer'>
    <p className='bottom-footer-para'> © 2022 Jmbliss IT Solutions</p>
 </div>
 </div>
</div> 

  );
};
export default Footer;
