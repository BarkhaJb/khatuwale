import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import dol from '../Components/assets/images/dol.jpg';
import Hanji from '../Components/assets/images/hanji.jpg';
import song from '../Components/assets/images/song.jpg';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const Artist = ({
  releaseSong,
  currentArtist,
  setMusicTracks,
  setDefaultMusic,
  setTrackIndex,
}) => {
  const [displaySongs, setDisplaySongs] = useState([]);
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
    if (currentArtist === null) {
      setDisplaySongs(releaseSong);
      setDefaultMusic();
    } else {
      const filteredSongs = filterSongsOnArtist(releaseSong, currentArtist);
      setDisplaySongs(filteredSongs);
      if (filteredSongs && filteredSongs?.length > 0) {
        const parsedData = filteredSongs.map((item) => {
          return { src: item.song, name: item.track, id: item._id };
        });
        setMusicTracks(parsedData);
      }
    }
  }, [currentArtist, releaseSong, setDefaultMusic, setMusicTracks]);
  const ChangeCurrentSong = (index) => {
    setTrackIndex(index);
  };
  return (
    <div className='newsong-page'>
      <div className='container'>
        <div className='newsng-container'>
          <div className='listing'>
            <h2  className='newsong-head' >New Songs 2022 - Boom Padi (From "Maja Ma"), Hanji Hanji</h2>
            <div className='short-slid'>
              <Carousel
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
              </Carousel>
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
          <p className='song1-para'>Songs have always had a special place in our lives. They are the ones that add more depth and meaning to our feelings. Be it a wedding, a party, a festival, or any other occasion, songs are the main element which adds the right kind of vibe to it. Whether we twerk on London Thumakda or sing along with our friends on Gaal Ni Kadni or do a headbang on Turn Down For What or dance in the rain with our partners on Tum Se Hi, all these moments become special by one thing, i.e., songs.    Living in a bilingual country, we have songs in different languages like Hindi, Punjabi, Gujarati, Marathi, Tamil, Telugu, Kannada, Malayalam, Assamese, Bengali, Bhojpuri, Malayalam and many more. All these are popular in their respective regions as well as around the world. Every type of song has its qualities which makes it different from the others.    New songs come up now and then, just like all the other things in the world. New songs always take our hearts away and make us humm along with them for days. With new verses and melodious tunes, these new songs never bore us from our usual playlist. Some of the new Hindi songs which are currently on everyone’s mind are Jersey, Dance Meri Rani, 83, Radhe Shyam (Hindi), Atrangi Re, Ni Jana, Mohabbat Hai, and the list goes on. If you are looking for the latest English songs, then you must listen to When I’m Gone, Wait, Echoes of Silence, The Dreaming, Fighting Demons, Scenic Drive, World of Walker, Wild Dreams (Deluxe Edition), 30, and many more. These tracks are perfect to add to your “hood playlist”. For all the ones who cannot do without Punjabi songs, you cannot afford to miss these new Punjabi songs namely Tabahiyan, Arthi, No Guarantee, Raat Saari, Aaya Jado Da x Dholla, Mumtaz, and many more. Apart from these famous genres, there are new songs in other genres as well like Tamil, Telugu, Bhojpuri, Kannada, Malayalam, Kannada, etc.    Everyone loves to explore something new in their lives, even if it's music. These latest songs give people new tunes to groove on and new verses to hum along. All the music industries work pretty hard to make something new and innovative each time, which is liked by the audience. People get excited every time they come to know that a new song is coming up by their favorite singer. They cannot afford to miss it, and we cannot afford to make you miss these new and hit songs. Download and listen to all the new MP3 songs on Gaana.com.</p>
        </div>
      </div>
   
  )
}

export default Artist;