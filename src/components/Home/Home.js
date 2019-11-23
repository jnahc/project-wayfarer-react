import React from 'react';

import './Home.css'

import tourist1 from './tourist1.jpg';
import tourist2 from './tourist2.jpg';
import tourist3 from './tourist3.jpg';

const Home = () => (
  <main>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
      </ol>
      <div className="carousel-inner carosize">
        <div className="carousel-item active carousel-item-left">
          <img className="bd-placeholder-img skyscrapers" src={tourist1} alt="Tourist" />
          <div className="container">
          </div>
        </div>
        <div className="carousel-item carousel-item-next carousel-item-left">
          <img className="skyscrapers bd-placeholder-img" src={tourist2} alt="Tourist" />
        </div>
        <div className="carousel-item">
          <img className="skyscrapers bd-placeholder-img" src={tourist3} alt="Tourist" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  <h2 className="header-text">Wayfarer is...</h2>
  <div className="row heading-topics">
    <div className="col-md-3 topic1">
      <h2>Topic</h2>
      <p className="break-para">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
    </div>
    <div className="col-md-3 topic2">
      <h2>Topic</h2>
      <p className="break-para">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
    </div>
    <div className="col-md-3 topic3">
      <h2>Topic</h2>
      <p className="break-para">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
    </div>
  </div>
</main>
);

export default Home;