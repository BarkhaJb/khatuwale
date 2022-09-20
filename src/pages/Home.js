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
    return(
<div className="container-fluid">
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
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>Trending Bhajans</h2>
      </div>    
       <div className='about-slider1 trnding-area'>
        <Carousel responsive={responsiveTwo} infinite={true} autoPlay={true}>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img  className='slider-img trnding-img'
                  src={tr_img1}  ></img>
               
              </figure>
              <figcaption> </figcaption>
             
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img trnding-img'
                  src={ tr_img2}></img>
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
                <img className='slider-img trnding-img'
                  src={tr_img4}  ></img>
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
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div> 
        
        </Carousel>
      </div>
      </div>
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>Top Playlist</h2>
      </div>    
       <div className='about-slider1 superhit'>
        <Carousel className="superhit" responsive={responsiveTwo} infinite={true} autoPlay={true}>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img  className='slider-img superhit-img'
                  src={top1}  ></img>
               
              </figure>
              <figcaption> </figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img superhit-img'
                  src={ top2}></img>
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
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div>

          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img'
                  src={tr_img3 }></img>
 
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Tera Jaadu Khatu</p>
          </div>
          </div> */}
          {/* <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img'
                src={tr_img4}  ></img>
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
        <Carousel responsive={responsiveTwo} infinite={true} >
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img  className='slider-img searchimg'
                  src={tr_img1}  ></img>
              </figure>
              <figcaption> </figcaption>
            </li>
           
            <div className="songname">
            <p>Kanhaiya Mittal</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                  src={ lkhabir}></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Lakhbir Singh Lakkha</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                  src={Raju}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Raju Kumar Khandelwal</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                  src={Anjali }></img>
 
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Anjali Dewadi</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                src={jaya}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Jaya Kishori</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                    src={ Uma}></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Uma Lahri</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img searchimg'
                  src={shiv}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Shiv Kumar Jalan</p>
          </div>
          </div>
        
        </Carousel>
      </div>
      </div>
      <div className="slider">
      <div className='slider1'>
        <h2 className='slider-heading'>New Releases</h2>
      </div>    
       <div className='about-slider1 release-area'>
        <Carousel responsive={responsiveTwo} infinite={true} autoPlay={true}>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img  className='slider-img Releaseimg  '
                  src={Release1}  ></img>
             
              </figure>
              <figcaption> </figcaption>
             
            </li>
          
            <div className="songname">
            <p>Baba Aayega</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                  src={Release2}></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Sanware Ki God Main</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                  src={Release3}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Kar Shyam Ko Yaad</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                  src={Release4}></img>
 
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Khatu se Bulawa Aayega</p>
          </div>
          </div>
          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                src={Release5}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Shyam Milega</p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                    src={Release6}></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Bhawo Ke Bhuke Shree Shyam </p>
          </div>
          </div>

          <div className='slick-slide'>
            <li className='blocks-gallery-item'>
              <figure>
                <img className='slider-img Releaseimg'
                  src={Release4}  ></img>
              </figure>
              <figcaption></figcaption>
            </li>
            <div className="songname">
            <p>Khatu se Bulawa Aayega</p>
          </div>
          </div>
        
        </Carousel>
      </div>
      </div>
     </div>
     </div>
    )
}

export default Home;