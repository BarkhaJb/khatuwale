import React  from "react";
import trend from '../Components/assets/images/trend.jpg';


const Trend=()=>{
    return(
        <div className="trend">
            <div className="trend-area">
                <section className="sec-1">
                <div className="trendimg">
                <a href="" className="bigimg"><img src={trend}  /></a>
                </div>
                <div className="Trending-song">
                    <h2>Trending Songs</h2>
                <p>Top trending hits, refreshed daily</p>
                <p>Created by Gaana</p>
                <p>23 Tracks</p>
                <button className="footer-btn">play</button>
                </div>
              </section>
              <section className="sec-2">
                 <div className="trend-song">
              <ul className="song-about">
                <li className="songabt-img"><p className="imgsong">#</p></li>
                <li className="songabt">
                    <div className="heading-row">
                        <div className="track"><p className="heading">Track</p></div>
                        <div className="artist"><p className="heading">Artist</p></div>
                    </div>
                </li>
                <li className="songabt-dur"><p className="heading">Duration</p></li>
              </ul>
              <ul  className="song-about">
                <li className="songabt-img">
                    <div className="listimg">
                    <a href="" ><img src={trend}  /></a>
                    </div>
                </li>
                <li className="songabt">
                    <div className="heading-row">
                        <div className="track"><p>Kesariya</p></div>
                        <div className="artist"><p>Pritam, Arijit Singh, Amitabh Bhattacharya</p></div>
                    </div>
                </li>
                <li className="row-item">
                   <p>04:28</p>
                </li>
                    
              </ul>
              <ul  className="song-about">
                <li className="songabt-img">
                    <div className="listimg">
                    <a href="" ><img src={trend}  /></a>
                    </div>
                </li>
                <li className="songabt">
                    <div className="heading-row">
                        <div className="track"><p>Summer High</p></div>
                        <div className="artist"><p>AP Dhillon</p></div>
                    </div>
                </li>
                <li className="row-item">
                <p>04:28</p>
                </li>
                    
              </ul>
              <ul  className="song-about">
                <li className="songabt-img">
                    <div className="listimg">
                    <a href="" ><img src={trend}  /></a>
                    </div>
                </li>
                <li className="songabt">
                    <div className="heading-row">
                        <div className="track"><p>I Wish I Could Hate You</p></div>
                        <div className="artist"><p>HRVY</p></div>
                    </div>
                </li>
                <li className="row-item">
                <p>04:28</p>
                </li>
                    
              </ul>
              <ul  className="song-about">
                <li className="songabt-img">
                    <div className="listimg">
                    <a href="" ><img src={trend}  /></a>
                    </div>
                </li>
                <li className="songabt">
                    <div className="heading-row">
                        <div className="track"><p>Mitti De Tibbe</p></div>
                        <div className="artist"><p>Kaka</p></div>
                    </div>
                </li>
                <li className="row-item">
                <p>04:28</p>
                </li>
                    
              </ul>
              </div>
              </section> 
            </div>
           
        </div>
    );
};
export default Trend;