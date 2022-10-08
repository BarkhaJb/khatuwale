import React,{useState, useEffect}  from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
 import  event from '../Components/assets/images/eventback.png';
 import  eventright  from '../Components/assets/images/eventright.png';
 import row1 from '../Components/assets/images/rowone.jpg';
 import row2 from '../Components/assets/images/rowtwo.jpg';
 import row3 from '../Components/assets/images/rowthree.jpg';
 import Recommend from '../Components/Recommend';

const Home = ({
  releaseSong,
  setReleaseSong,
  setCurrentArtist,
  fetchSongs,
  setTrackIndex,
  setMusicTracks,

}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
         desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 992, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      
      const responsiveTwo = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1025 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 992 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 991, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
      // const responsiveThree = {
      //   superLargeDesktop: {
      //     // the naming can be any, depends on you.
      //     breakpoint: { max: 4000, min: 3000 },
      //     items: 5,
      //   },
      //   desktop: {
      //     breakpoint: { max: 3000, min: 1024 },
      //     items: 3,
      //   },
      //   tablet: {
      //     breakpoint: { max: 1024, min: 464 },
      //     items: 2,
      //   },
      
      //   mobile: {
      //     breakpoint: { max: 464, min: 0 },
      //     items: 2,
      //   },
      // };
      const [trendingSong, setTrendingSong] = React.useState([]);
      const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [playlist, setPlaylist] = React.useState([]);


  useEffect(() => {
    const url = 'http://localhost:3100/artist';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

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
  useEffect(() => {
    const url = 'http://localhost:3100/trending';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrendingSong(json))
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const SongSelect = (index) => {
    navigate('/Trending');
    setTrackIndex(index);
    console.log('ths is user');
  };
  const navigateToTopArtist = (user) => {
    console.log('USER THIS', user);
    setCurrentArtist(user);
    navigate('/Top-Artist');
  };


  const CategorySelect = (user) => {
    console.log('ths is user', user);
    setCurrentArtist(user);
    navigate('/category');
  };
  const navigateToNewRelease = (index) => {

    setTrackIndex(index)
    navigate('/newReleases');
  };
  const MoveToPlaylist = (user) => {
    console.log(' THIS user', user);
    setCurrentArtist(user);
    navigate('/TopPlaylist');
  };
 

    return(
<div className="container-fluid">
      <div className="home ulhover">
     
         <div className='ft-bnr'>
        {' '}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
        {category.map((user) => (
          <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
              <Link to='/Category'>   <img src={user.image} className='slider-top-img'    onClick={() => CategorySelect(user)}></img></Link>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
        ))}
         
        </Carousel>
        </div>
      </div>
      <Recommend setMusicTracks={setMusicTracks} 
      setTrackIndex={ setTrackIndex}/>
{/*  
      <div className="slider  ulhover">
        {' '}
       
         <div className='slider1'>
           <div className="heading-area">
              <div className="rightheading-area">
              <h2 className='slider-heading'>Khatuwaleshyam Recommends</h2>
              </div>
              <div className="leftheading-area">
                <h5 className='see-head'>see all</h5>
                </div>
           </div>
         </div>    
         <div className='about-slider1 recommend'>
              <div className="row1">
               <div className="row-area">
                <div className="recommend-no">01</div>
                  <div className="row-image">
                  <Link to='/'>   <img src={row1}  className="roimg"></img></Link>
                  </div>
                   <div className="row-content">
                    <p className="recommend-song">Haare Ke Sahare Aaja</p>
                    <p className="recommend-artist">sanjay mittal</p>
                    </div>
                    </div>
              </div>
              <div className="row1">
                <div className="row-area">
                   <div className="recommend-no">02</div>
                  <div className="row-image"> <Link to='/'>   <img src={row2} className="roimg" ></img></Link></div>
                  <div className="row-content">
                   <p className="recommend-song">Haara Hu Baba</p>
                   <p className="recommend-artist">kanhaiya mittal</p>
                  </div>
                  </div>
               </div> 
               <div className="row1">
               <div className="row-area">
               <div className="recommend-no">03</div>
                   <div className="row-image"> <Link to='/'>   <img src={row3} className="roimg" ></img></Link></div>
                   <div className="row-content">
                   <p className="recommend-song">Pakad Lo Hath Banwari Ka</p>
                    <p className="recommend-artist">upasna mehta</p>
                    </div>
                    </div>
               </div> 
         </div>
      </div> */}
      <div className="slider  ulhover">
        {' '}
       
         <div className='slider1'>
           <h2 className='slider-heading'>Trending Bhajans</h2>
         </div>    
         <div className='about-slider1 trnding-area'>
             <Carousel responsive={responsiveTwo} infinite={true} >
             {trendingSong.map((user, index)=>(
              <div className='slick-slide'>
                 <li className='blocks-gallery-item'>
                     <img  className='slider-img trnding-img'
                     src={user.image} onClick={()=>SongSelect(index)} ></img>
                     <div className="playyiconhome"> <Link to='/Trending' > <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
                 </li>
              <div className="songname" onClick={()=>SongSelect(index)}>
                 <p className="artsong">{user.track}</p>
                 <p className="artname">{user.artist}</p>
              </div>
               </div>
                ))}
              </Carousel>
         </div>
      </div>
      <div className="slider  ulhover">
          <div className='slider1'>
              <h2 className='slider-heading'>Top Playlist</h2>
         </div>    
         <div className='about-slider1 superhit'>
               <Carousel className="superhit" responsive={responsiveTwo} infinite={true}>
              {playlist.map((user) => (
               <div className='slick-slide'>
               <li className='blocks-gallery-item'>
      
                    <img  className='slider-img superhit-img'
                    src={user.image}   onClick={() => MoveToPlaylist(user)} ></img>
                    <div className="playyiconhome"><i class="fa fa-play-circle-o" aria-hidden="true" onClick={() => MoveToPlaylist(user)}></i></div>
               </li>
            <div className="songname">
            {/* <p>{user.title}</p> */}
          </div>
          </div>
            ))}
            </Carousel>
             </div>
      </div>
      <div className="slider  ulhover">
          <div className='slider1'>
              <h2 className='slider-heading'>Top Searched Artists</h2>
          </div>    
          <div className='about-slider1 Searched'>
                <Carousel responsive={responsiveTwo} infinite={true}>
                    {data.map((user) => (
                     <div className='slick-slide'>
                     <li className='blocks-gallery-item'>
                        <img  className='slider-img searchimg'
                        src={user.image}  onClick={() => {
                        navigateToTopArtist(user);
                         }} ></img>
                        <div className="playyiconhome"><i class="fa fa-play-circle-o" aria-hidden="true" onClick={() => 
                        navigateToTopArtist(user)
                        }></i></div>
              
                     </li>
           
                   <div className="songname searchpara">
                      <p>{user.artist}</p>
                   </div> 
          </div>         
             ))}

              </Carousel>
      </div>
      <div className="slider  ulhover">
         <div className='slider1'>
        <h2 className='slider-heading'>New Releases</h2>
          </div>    
          <div className='about-slider1 release-area'>
        <Carousel responsive={responsiveTwo} infinite={true} >
        {releaseSong.map((user, index) => (
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
            
                 <img  className='slider-img Releaseimg  '
                  src={user.image}  onClick={() => navigateToNewRelease(index)} ></img>
                    <div className="playyiconhome"><i class="fa fa-play-circle-o" aria-hidden="true" onClick={() => navigateToNewRelease(index)}></i></div>
      
    
             
            </li>
            {/* <div className="playyicon"><i class="fa fa-play-circle" aria-hidden="true"></i> </div> */}
            <div className="songname">
            <p className="artsong">{user.track}</p>
            <p className="artname">{user.artist}</p>
          </div>
          </div>
        ))}
        
        </Carousel>
          </div>
       </div>
      </div>
    {/* </div> */}
    <div style={{ backgroundImage:`url(${event})` }} className='upcomingEvents'  >
           <div className="event-left">
                     <div className='eventhead'>
                            <h2>upcoming Events</h2>
                     </div>
                     <div className="about-event">
                      <h3>Khatushyam Bhajan Sandhya</h3>
                     </div>
                     <div className="concert">
                        <div className="area1">
                            <div  className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-map-marker areaicon" aria-hidden="true"></i></button></Link>
                               <p>Indore</p></div>
                           <div  className="area-content"> <Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-calendar areaicon" aria-hidden="true"></i></button></Link><p>06 oct..</p></div>
                            <div className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-clock-o areaicon" aria-hidden="true"></i></button></Link><p>06:00 pm</p></div>
                        </div>
                        <div className="area1">
                            <div  className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-map-marker areaicon" aria-hidden="true"></i></button></Link>
                               <p>Indore</p></div>
                           <div  className="area-content"> <Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-calendar areaicon" aria-hidden="true"></i></button></Link><p>06 oct..</p></div>
                            <div className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-clock-o areaicon" aria-hidden="true"></i></button></Link><p>06:00 pm</p></div>
                        </div>
                        <div className="area1">
                            <div  className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-map-marker areaicon" aria-hidden="true"></i></button></Link>
                               <p>Indore</p></div>
                           <div  className="area-content"> <Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-calendar areaicon" aria-hidden="true"></i></button></Link><p>06 oct..</p></div>
                            <div className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-clock-o areaicon" aria-hidden="true"></i></button></Link><p>06:00 pm</p></div>
                        </div>
                        <div className="area1">
                            <div  className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-map-marker areaicon" aria-hidden="true"></i></button></Link>
                               <p>Indore</p></div>
                           <div  className="area-content"> <Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-calendar areaicon" aria-hidden="true"></i></button></Link><p>06 oct..</p></div>
                            <div className="area-content"><Link to='' className='eventlink'> <button className='eventbtn'><i class="fa fa-clock-o areaicon" aria-hidden="true"></i></button></Link><p>06:00 pm</p></div>
                        </div>
                     </div> 
           </div>
           <div className="event-right">
               <div className="eventimg"> <a href="" ><img src={eventright}  className="eventimgsize"/></a></div>
           </div>

    </div>      
</div>
           
    
    )
}

export default Home;