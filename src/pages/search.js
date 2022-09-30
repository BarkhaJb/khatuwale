import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchContent = ({ setMusicTracks, setTrackIndex }) => {
  const [search, setSearch] = useState([]);
  const location = useLocation();
  console.log(location.state);


  // useEffect(() => {
  //   if (location && location.state) {
  //     const searchValue = location.state;
  //     const url = `https://khatu-wale-api.herokuapp.com/search/${searchValue}`;
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setSearch(json);
  //       });
  //   }
  // }, []);
  // console.log('this is search', search);


  useEffect(() => {
    if (location && location.state) {
      const searchValue = location.state;
      const url = `https://khatu-wale-api.herokuapp.com/search/${searchValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const parsedData = json.map((item) => {
            return { src: item.song, name: item.track, id: item._id };
          });
          console.log('PARSED', parsedData);
          setMusicTracks(parsedData);
          setSearch(json);
        });
    }
  }, [location, location.state, setMusicTracks]);
  console.log('this is search', search);

  const ChangeCurrentSong = (index) => {
    setTrackIndex(index);
    console.log('this is song index---->', index);
  };
  const SetIndexToZero = (index) => {
    setTrackIndex(0);
  };

  return (
    <div className="seacharea">
      <div className="Search-result"><h2> Searched result</h2></div>
    <div className='ul-song'>
      <ul className='card-area'>
        {search?.map((user, index) => (
          <li className='card'>
            <img src={user.image} onClick={() => ChangeCurrentSong(index)}/>
            <div className='song-name'>
              <p>{user.track}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SearchContent;