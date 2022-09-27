import React,{useState, useEffect}  from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import s1 from '../Components/assets/images/s1.jpg';
import s2 from '../Components/assets/images/s2.jpg';
import s3 from '../Components/assets/images/s3.jpg';
import s4 from '../Components/assets/images/s4.jpg';
import tr_img1 from '../Components/assets/images/tr_img1.jpg';
import tr_img2 from '../Components/assets/images/tr_img2.png';
import tr_img4 from '../Components/assets/images/tr_img4.jpg';
import tr_img3 from '../Components/assets/images/tr_img3.jpg';
import lkhabir from '../Components/assets/images/Lakhbir-Singh-Lakha-q.jpg';
import Anjali from '../Components/assets/images/Anjali-Dwivedi.jpg';
import Uma  from '../Components/assets/images/Uma Lahari.jpg';
import shiv from '../Components/assets/images/shiv.jpg';
import jaya from '../Components/assets/images/jaya.jpg';
import Raju from '../Components/assets/images/Rajukumar.jpg';
import Release1 from '../Components/assets/images/Release1.png';
import Release2 from '../Components/assets/images/Release2.png';
import Release3 from '../Components/assets/images/Release3.png';
import Release4 from '../Components/assets/images/Release4.png';
import Release5 from '../Components/assets/images/Release5.png';
import Release6 from '../Components/assets/images/Release6.jpg';
import top1 from '../Components/assets/images/newRelease.jpg';
import top2 from '../Components/assets/images/kanhiyahitts.jpg';
import top3 from '../Components/assets/images/super5.jpg';
import {useNavigate} from 'react-router-dom'


const Home = ({
  releaseSong,
  setReleaseSong,
  setCurrentArtist,
  fetchSongs,
}) => {

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
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const [trendingSong, setTrendingSong] = React.useState([]);
      const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  useEffect(() => {
    const url = 'https://khatu-wale-api.herokuapp.com/artist';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const url = 'https://khatu-wale-api.herokuapp.com/category';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setCategory(json))
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const SongSelect = (user) => {
    navigate('/Trending', { state: { user } });
    console.log('ths is user', user);
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
  useEffect(() => {
    const url = 'https://khatu-wale-api.herokuapp.com/songs';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrendingSong(json))
      .catch((error) => console.log(error));
  }, []);

    return(
<div className="container-fluid">
      <div className="home">
     
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
      {/* <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
              <Link to='/Trending'> <img src={s2} className='slider-top-img'></img></Link>
              
              </figure>
              <figcaption></figcaption>
            </li>
          </div> */}

          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
              <Link to='/Trending'>    <img src={s3} className='slider-top-img'></img></Link> 
             
              </figure>
              <figcaption></figcaption>
            </li>
          </div> */}

          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
              <Link to='/Trending'>   <img src={s4} className='slider-top-img'></img></Link>
            
              </figure>
              <figcaption></figcaption>
            </li>
          </div>  */}
         
        </Carousel>
      </div>
      <div className="slider">
      {' '}
       
      <div className='slider1'>
        <h2 className='slider-heading'>Trending Bhajans</h2>
      </div>    
       <div className='about-slider1 trnding-area'>
        <Carousel responsive={responsiveTwo} infinite={true}  autoPlay={true}>
          {trendingSong.map((user)=>(

        


          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
             <img  className='slider-img trnding-img'
                  src={user.image} onClick={()=>SongSelect()} ></img>
                 <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption> </figcaption>
             
            </li>
            <div className="songname">
            <p>{user.track}</p>
          </div>
          </div>
          ))}
          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
            <img className='slider-img trnding-img'
                  src={ tr_img2}></img>
                    <div className="playyiconhome">  <Link to='/Trending'><i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
          
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>
         */}
        
          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
              <img className='slider-img trnding-img'
                  src={tr_img4}  ></img>
                    <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
           
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item trnding-img'>
              <figure>
             <img className='slider-img trnding-img'
                  src={tr_img3 }></img>
                  <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
              <img className='slider-img'
                src={tr_img4}  ></img>
                   <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
          
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

           <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img'
                    src={ tr_img2}></img>
                      <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
           
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
               <img className='slider-img'
                  src={tr_img1}  ></img>
                     <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
           
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>  */}
        
        </Carousel>
      </div>
      </div>
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>Top Playlist</h2>
      </div>    
       <div className='about-slider1 superhit'>
        <Carousel className="superhit" responsive={responsiveTwo} infinite={true} autoPlay={true}>
        {category.map((user) => (
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
               <img  className='slider-img superhit-img'
                  src={user.image}   onClick={() => CategorySelect(user)} ></img>
                  <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption> </figcaption>
             
            </li>
            <div className="songname">
            <p>{user.track}</p>
          </div>
          </div>
        ))}
          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
             <img className='slider-img superhit-img'
                  src={ top2}></img>
                     <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
               <img className='slider-img superhit-img'
                  src={top3}  ></img>
                     <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>
          
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img superhit-img'
                  src={top3}  ></img>
                    <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
            <img className='slider-img superhit-img'
                  src={top3}  ></img>
                     <div className="playyiconhome"> <Link to='/Trending'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div> */}
        
        </Carousel>
      </div>
      </div>
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>Top Searched Artists</h2>
      </div>    
       <div className='about-slider1 Searched'>
        <Carousel responsive={responsiveTwo} infinite={true}   autoPlay={true}>
           {data.map((user) => (
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
              <img  className='slider-img searchimg'
                  src={user.image}  onClick={() => {
                    navigateToTopArtist(user);
                  }} ></img>
                    <div className="playyiconhome">  <Link to='/Top-Artist'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption> </figcaption>
            </li>
           
            <div className="songname">
            <p>{user.artist}</p>
          </div> 
          </div>         
           ))}

        </Carousel>
        </div>
     
    
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>New Releases</h2>
      </div>    
       <div className='about-slider1 release-area'>
        <Carousel responsive={responsiveTwo} infinite={true} autoPlay={true}>
        {releaseSong.map((user) => (
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                 <img  className='slider-img Releaseimg  '
                  src={user.image}  ></img>
                    <div className="playyiconhome">  <Link to='/Top-Artist'> <i class="fa fa-play-circle-o" aria-hidden="true"></i></Link> </div>
              </figure>
              <figcaption> </figcaption>
             
            </li>
            {/* <div className="playyicon"><i class="fa fa-play-circle" aria-hidden="true"></i> </div> */}
            <div className="songname">
            <p>{user.track}</p>
          </div>
          </div>
        ))}
        
        </Carousel>
      </div>
    
    </div>
    </div>
    </div>

          <div className='upcomingEvents'>
              <div className='eventhead'>
                <h1 className='event-h1'>Upcoming Events</h1>
              </div>
              <div className='clctn-ee'>
                <div class='sliderrr'>
                  <div class='slide-trackkk'>
                    <div class='slideee'>
                      <div className='events'>
                        <h3 className='events-h3'>
                          Khatu Shyam Bhajan sandhya, indore
                        </h3>
                        <h5 className='events-h5'>June 21 @ 6:00 PM</h5>
                      </div>
                      <div className='events'>
                        <h3 className='events-h3'>
                          Khatu Shyam Bhajan sandhya, pune
                        </h3>
                        <h5 className='events-h5'>June 21 @ 6:00 PM</h5>
                      </div>
                      <div className='events'>
                        <h3 className='events-h3'>
                          Khatu Shyam Bhajan sandhya, mumbai
                        </h3>
                        <h5 className='events-h5'>June 21 @ 6:00 PM</h5>
                      </div>
                      <div className='events'>
                        <h3 className='events-h3'>
                          Khatu Shyam Bhajan sandhya, jaipur
                        </h3>
                        <h5 className='events-h5'>June 21 @ 6:00 PM</h5>
                      </div>
                      <div className='events'>
                        <h3 className='events-h3'>
                          Khatu Shyam Bhajan sandhya, delhi
                        </h3>
                        <h5 className='events-h5'>June 21 @ 6:00 PM</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
    )
}

export default Home;