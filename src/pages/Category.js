import React, { useState, useEffect } from 'react';
import tr_img1 from '../Components/assets/images/tr_img1.jpg';
import tr_img2 from '../Components/assets/images/tr_img2.png';
import tr_img4 from '../Components/assets/images/tr_img4.jpg';
import tr_img3 from '../Components/assets/images/tr_img3.jpg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Category = ({
  setMusicTracks,
  setTrackIndex,
  user,
  currentArtist,
  fetchSongs,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [release, setRelease] = React.useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (currentArtist === null) {
    }
    const url = `https://khatu-wale-api.herokuapp.com/category/songs/${currentArtist._id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCategory(json);
        console.log('CONSOLE', json);
        const parsedDataTwo = json.map((item) => {
          return { src: item.song, name: item.track, id: item._id };
        });
        console.log('PARSED', parsedDataTwo);
        setMusicTracks(parsedDataTwo);
        setRelease(json);
      })

      .catch((error) => console.log(error));
  }, []);

  const ChangeCurrentSong = (index) => {
    setTrackIndex(index);
    console.log('this is song index---->', index);
  };

  const SetIndexToZero = (index) => {
    setTrackIndex(0);
    console.log('this is current index', index);
  };

  return (
    <div className='trend'>
      <div className='trend-area'>
        <section className='sec-1'>
          <div className='trendimg'>
            <img src={currentArtist.image}  className="art-img"/>
          </div>
          <div className='Trending-song'>
            <div className='trnd-img-about'>
              <h2>Lene Aaja Khatu</h2>
              <p>Top trending hits, refreshed daily</p>
             
              <p>23 Tracks</p>
            </div>
            <div className='trndbtn'>
              <button className='footer-btn' onClick={() => SetIndexToZero()}>
                play All
              </button>
            </div>
          </div>
        </section>
        <section className='sec-2'>
          <div className='trend-song'>
            <ul className='song-about'>
              <li className='songabt-img'>
                <p className='imgsong'>#</p>
              </li>
              <li className='songabt'>
                <div className='heading-row'>
                  <div className='track'>
                    <p className='heading'>Track</p>
                  </div>
                  <div className='artist'>
                    <p className='heading'>Artist</p>
                  </div>
                </div>
              </li>
              <li className='songabt-img'>
                {' '}
                <Link to='' className='anchor-foo'>
                  <p className='imgsong'>
                    <i className='fa fa-heart-o' aria-hidden='true'></i>
                  </p>
                </Link>
              </li>
              <li className='songabt-img'>
                <p className='imgsong'>
                  <i class='fa fa-ellipsis-v' aria-hidden='true'></i>
                </p>
              </li>
              <li className='songabt-dur'>
                <p className='heading'>Duration</p>
              </li>
            </ul>
            {category.map((user, index) => (
              <ul className='song-about'>
                <li className='songabt-img'>
                  <div className='listimg'>
                    <img
                      src={user.image}
                      onClick={() => ChangeCurrentSong(index)}
                    />
                    <div className='playyicon'>
                      <i class='fa fa-play-circle-o' aria-hidden='true'></i>{' '}
                    </div>
                  </div>
                </li>
                <li className='songabt'>
                  <div className='heading-row'>
                    <div className='track'>
                      <p>{user.track}</p>
                    </div>
                    <div className='artist'>
                      <p>{user.artist}</p>
                    </div>
                  </div>
                </li>
                <li className='songabt-img'>
                  <Link to='' className='anchor-foo'>
                    <p className='hearticon'>
                      <i class='fa fa-heart-o' aria-hidden='true'></i>
                    </p>
                  </Link>
                </li>
                <li className='songabt-img'>
                  <Link to='' className='anchor-foo'>
                    <p className='moreoption'>
                      <i class='fa fa-ellipsis-v' aria-hidden='true'></i>
                    </p>
                  </Link>
                </li>
                <li className='row-item'>
                  <p>{user.duration}</p>
                </li>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Category;