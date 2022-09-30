import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import dol from '../Components/assets/images/dol.jpg';
import Hanji from '../Components/assets/images/hanji.jpg';
import song from '../Components/assets/images/song.jpg';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Artist = ({
  releaseSong,
  currentArtist,
  setMusicTracks,
  setDefaultMusic,
  setTrackIndex,
}) => {
  const [displaySongs, setDisplaySongs] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const responsive1111 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
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
  const filterSongsOnArtist = (songs, selectedArtist) => {
    const filteredSongs = songs.filter((element) => {
      return element.artist === selectedArtist.artist;
    });
    return filteredSongs;
  };
  useEffect(() => {
    if (currentArtist === null || undefined) {
      // setDisplaySongs(releaseSong);
      // setDefaultMusic();
      navigate('/')
      
    } 
    const url = `https://khatu-wale-api.herokuapp.com/artist/songs/${currentArtist?._id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDisplaySongs(json);
        console.log('CONSOLE', json);
        const parsedDataTwo = json.map((item) => {
          return { src: item.song, name: item.track, id: item._id };
        });
        console.log('PARSED', parsedDataTwo);
        setMusicTracks(parsedDataTwo);
        setDisplaySongs(json);
      })

      .catch((error) => console.log(error));
  }, [currentArtist, navigate, setMusicTracks]);
  const ChangeCurrentSong = (index) => {
    setTrackIndex(index);
  };


  return (
    <div className='newsong-page'>
      <div className='container'>
        <div className='newsng-container'>
          <div className='listing'>
            <h2  className='newsong-head' >Songs By Artist</h2>
            <div className='short-slid'>
              {/* <Carousel
                responsive={responsive1111}
                infinite={true}
                autoPlay={false}
                arrows={true}
              >
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>All</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Hindi</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>English</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Marathi</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Telgu</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Tamil</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Hindi</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>English</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Marathi</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
                <div className='slick-slide'>
                  <li className='blocks-gallery-item wdt'>
                    <figure className='tp-art'>Telgu</figure>
                    <figcaption></figcaption>
                  </li>
                </div>
              </Carousel> */}
            </div>

            </div>
            <div className='ul-song'>
              <ul className='card-area'>
              {displaySongs?.map((user, index) => (
                <li className='card'>
                <Link to='' className='box-img'><img src={user.image} onClick={() => ChangeCurrentSong(index)} /></Link>
                <div className='song-name'><Link to='' className='box-song'><p>{user.track}</p></Link></div>
                </li>
              ))}
                {/* <li className='card'> <Link to='' className='box-img'><img src={dol}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Dhol Bajaa</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={dol}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Name Fame</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={dol}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Honey Ke Sang</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Aaj Phir</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}   /></Link>
                <div className='song-name'><Link to='' className='box-song'>Kahāni Koyi</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={dol}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Honey Ke Sang</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Aaj Phir</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={song}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={song}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={song}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={song} /></Link>
                <div className='song-name'><Link to='' className='box-song'>Hanji Hanji</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={song} /></Link>
                <div className='song-name'><Link to='' className='box-song'>Hanji Hanji</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={dol} /></Link>
                <div className='song-name'><Link to='' className='box-song'>Hanji Hanji</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={Hanji}  /></Link>
                <div className='song-name'><Link to='' className='box-song'>Like You</Link></div>
                </li>
                <li className='card'>
                <Link to='' className='box-img'><img src={dol} /></Link>
                <div className='song-name'><Link to='' className='box-song'>Hanji Hanji</Link></div>
                </li> */}
              </ul>
            </div>
          </div>
          
        </div>
        <div className='song-para'>
          
        </div>
      </div>
   
  )
}

export default Artist;