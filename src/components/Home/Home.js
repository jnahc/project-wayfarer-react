import React from 'react';

import './Home.css'

import skyscraper1 from './skyscraper1.jpg';
import skyscraper2 from './skyscraper2.jpg';
import skyscraper3 from './skyscraper3.jpg';

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
          <img className="bd-placeholder-img skyscrapers" src={skyscraper1} alt="Sky Scraper" />
          <div className="container">
          {/* <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div> */}
          </div>
        </div>
        <div className="carousel-item carousel-item-next carousel-item-left">
          <img className="skyscrapers bd-placeholder-img" src={skyscraper2} alt="Sky Scraper" />
        </div>
        <div className="carousel-item">
          <img className="skyscrapers bd-placeholder-img" src={skyscraper3} alt="Sky Scraper" />
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
    <div className="col-md-4 topic1">
      <h2>Topic</h2>
      <p>Donec id elit non mi porta gravida at eget<br/> metus. Fusce dapibus, tellus ac cursus<br/> commodo, tortor mauris condimentum<br/> nibh, ut fermentum massa justo sit amet<br/> risus. Etiam porta sem malesuada magna<br/> mollis euismod. Donec sed odio dui. </p>
      {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
    </div>
    <div className="col-md-4 topic2">
      <h2>Topic</h2>
      <p>Donec id elit non mi porta gravida at eget<br/> metus. Fusce dapibus, tellus ac cursus<br/> commodo, tortor mauris condimentum<br/> nibh, ut fermentum massa justo sit amet<br/> risus. Etiam porta sem malesuada magna<br/> mollis euismod. Donec sed odio dui. </p>
      {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
    </div>
    <div className="col-md-4 topic3">
      <h2>Topic</h2>
      <p>Donec id elit non mi porta gravida at eget<br/> metus. Fusce dapibus, tellus ac cursus<br/> commodo, tortor mauris condimentum<br/> nibh, ut fermentum massa justo sit amet<br/> risus. Etiam porta sem malesuada magna<br/> mollis euismod. Donec sed odio dui. </p>
      {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
    </div>
  </div>
</main>
);

export default Home;