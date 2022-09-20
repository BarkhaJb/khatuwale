import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
 <div className="footer" >

        <div className='top-footer-para'>
            <h2>Hare Ka Sahara Baba Shyam Hamara</h2>
            <p>Kathin rah bhi saral ho jayegi mushkilen
sari hal ho jayegi ek bar aaja tu sharan
shyam ke zindagi teri safal ho jayegi,
Jay shree Shyam.
</p>
        </div>
    <div className='container-fluid'>
        <div className='container'>
        <div className='footer-awsfnts'>
        <Link to='' className='anchor-foo'> <i className="fa fa-facebook-official icon" aria-hidden="true"></i></Link>
        <Link to='' className='anchor-foo'> <i className="fa fa-twitter-square icon" aria-hidden="true"></i></Link>
        <Link to='' className='anchor-foo'> <i className="fa fa-instagram icon" aria-hidden="true"></i></Link>
        <Link to='' className='anchor-foo'> <i className="fa fa-youtube-play icon" aria-hidden="true"></i></Link>
        </div>
        <div className='footer-para'>
            <p className='about-para'>Advertise on Khatushyam .Terms  of  UsePrivacy  Policy  Partners  Sitemap FAQ</p>
        </div>
 <div className='footer-content'>
    <div className='footer-album'>
       <div className='footer-menu1'>
        <h4 className='foo-heading'>album</h4>
        <div className="menu1-content">
            <ul className='album-list'>
                <li className='album-item bullet'><Link to='' className='anchor-foo'>English</Link></li>
                <li className='album-item bullet '><Link to='' className='anchor-foo'>Hindi</Link></li>
                <li className='album-item bullet'><Link to=''  className='anchor-foo'>Telgu</Link></li>
                <li className='album-item bullet'><Link to=''  className='anchor-foo'>Tamil</Link></li>
                <li className='album-item bullet'><Link to=''  className='anchor-foo'>Bhojpuri</Link></li>
                <li className='genres-item bullet'> <Link to='' className='anchor-foo view'>View All</Link></li>
            </ul>
        </div>
       </div>
    </div>
    <div className='footer-genres'>
     <div className='footer-menu2'>
        <h4 className='foo-heading'>genres</h4>
        <div className='menu2-content'>
            <ul className='genres-list'>
               <li className='genres-item bullet'><Link to=''  className='anchor-foo'>Bollywood Songs</Link></li>
                <li className='genres-item bullet'><Link to=''  className='anchor-foo'>Devotional Songs</Link></li>
                <li className='genres-item bullet'><Link to=''  className='anchor-foo'>Bhajans</Link></li>
                <li className='genres-item bullet'><Link to=''  className='anchor-foo'>Romentic songs</Link></li>
                <li className='genres-item bullet'><Link to=''  className='anchor-foo'>Sufi songs</Link></li>
               <li className='genres-item bullet'> <Link to='' className='anchor-foo view'>View  All</Link></li>
            </ul>
        </div>
     </div>
    </div>  
    <div className='footer-artist'>
     <div className='footer-menu3'>
        <h4 className='foo-heading'>artist</h4>
        <div className='menu3-content'>
            <ul className='artist-list'>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Arijit</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Neha</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Shahid</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Atif</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Shreya</Link></li>
                <li className='genres-item bullet'> <Link to='' className='anchor-foo view'>View  All</Link></li>
            </ul>
        </div>
     </div>
    </div>
    <div className='footer-release'>
        <div className='footer-menu4'>
            <h4 className='foo-heading'>release</h4>
            <div className='menu4-content'>
                <ul className='release-list'>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>English Songs</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Hindi Songs</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Telgu Songs</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Tamil Songs</Link></li>
                <li className='artist-item bullet'><Link to='' className='anchor-foo'>Bhojpuri Songs</Link></li>
                <li className='genres-item bullet'> <Link to='' className='anchor-foo view'>View All</Link></li>
                </ul>
            </div>
        </div>

    </div>     
 </div>
 </div>
 <div className='bottom-footer'>
    <p className='bottom-footer-para'>2022 Jmbliss IT Solutions</p>
 </div>
 </div>
</div> 

  );
};
export default Footer;
