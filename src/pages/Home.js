import React from "react";
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
import top_searchimg1 from '../Components/assets/images/top-searchimg1.jpg';
import top_searchimg2 from '../Components/assets/images/top-searchimg2.jpg';
import top_searchimg3 from '../Components/assets/images/top-searchimg3.jpg';
import top_searchimg4 from '../Components/assets/images/top-searchimg4.jpg';
import top_searchimg5 from '../Components/assets/images/top-searchimg5.jpg';


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
                <img  className='tr_img'
                  src={tr_img1}  ></img>
               
              </figure>
              <figcaption> </figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                  src={ tr_img2}></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                  src={tr_img4}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                  src={tr_img3 }></img>
 
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                src={tr_img4}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                    src={ tr_img2}></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                  src={tr_img1}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='tr_img'
                  src={ tr_img2}></img>
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
                  src={top_searchimg1} ></img>
              </figure>
              <figcaption> </figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={top_searchimg4} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                   src={top_searchimg1} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                 src={top_searchimg5} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={top_searchimg2} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                   src={top_searchimg3} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>

          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                  src={top_searchimg4} ></img>
              </figure>
              <figcaption></figcaption>
            </li>
          </div>
          <div className='3-slick-slide'>
            <li className='3rd-slide-item'>
              <figure>
                <img className="top-searchimg"
                   src={top_searchimg5} ></img>
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