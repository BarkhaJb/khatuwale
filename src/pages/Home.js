import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import s1 from '../Components/assets/images/s1.jpg'
import s2 from '../Components/assets/images/s2.webp'
import s3 from '../Components/assets/images/s3.webp'
import s4 from '../Components/assets/images/s4.webp'


const Home = () => {

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
          items: 7,
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
    return(
      <div className="home">
     
        <div className='ft-bnr'>
        {' '}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
    
          <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
                <img src={s1} className='slider-top-img'></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

      <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
                <img src={s2} className='slider-top-img'></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
                <img src={s3} className='slider-top-img'></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item wdt'>
              <figure>
                <img src={s4} className='slider-top-img'></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div> 
         
        </Carousel>
      </div>
      <div className='div-sec'>
        <h2 className='tr_sng'>Trending Songs</h2>
      </div>    
       <div className='hm-bn2-trend'>
        <Carousel responsive={responsiveTwo} infinite={true} autoPlay={true}>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPEMM1W6/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption> </figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgZ8xM3y/size_m.webp'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/VdNW0Mbo5e/NW0JexPpKo/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgZ8xM3y/size_m.webp'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
        
        </Carousel>
      </div>
      <div className='circle-bnner'>
        <h2 className='third-heading'>Top Songs</h2>
      </div>    
       <div className='hm-bn2-trend'>
        <Carousel responsive={responsiveTwo} infinite={true} autoPlay={true}>
          <div className='slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPEMM1W6/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption> </figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgZ8xM3y/size_m.webp'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/VdNW0Mbo5e/NW0JexPpKo/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgZ8xM3y/size_m.webp'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={
                    'https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwYoezKy/size_m.jpg'
                  }
                ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
        
        </Carousel>
      </div>
     </div>
    )
}

export default Home;