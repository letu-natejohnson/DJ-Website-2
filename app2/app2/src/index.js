import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { containerStyles } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withResizeDetector } from 'react-resize-detector';
import { useResizeDetector } from 'react-resize-detector';
import ReactDOM from 'react-dom';
import './index.css';
import './image-gallery.css';
import ImageGallery from 'react-image-gallery';
import insta from './instagram.png';
import phone from './phone.png';
import email from './email.png';
import about from './about.jpg';
import background from './homepage.png';




import reportWebVitals from './reportWebVitals';
import { findByLabelText } from '@testing-library/dom';

var mobi = false;


var MOBILETHRESHHOLD = 700;

var services = [
  ["Generic", "Service desc"],
  ["Generic #2", "Another service desc"],
  ["Generic #3", "Another service desc"],
  ["Generic #4", "Another service desc"],
  ["Generic #5", "Another service desc"],
  ["Generic #6", "Service desc"],
  ["Generic #7", "Another service desc"],
  ["Generic #8", "Another service desc"],
  ["Generic #9", "Another service desc"],
  ["Generic #10", "Another service desc"],
  ["Generic #11", "Another service desc"],
  ["Generic #12", "Another service desc"]
]

var QNAs = [
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."],
  ["Question? ", "Answer."]
]

const images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
]

const AdaptiveComponent = ({ width, height }) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    setColor(width > 500 ? 'red' : 'blue');
  }, [width]);


  return (
    <Router>
      <div className="Router">
        <nav >
          <ul className="RouterList">
            <li className="RouterElm">
              <Link to="/" class="menu">CD Entertainment</Link>
            </li>
            <li className="RouterElm">
              <Link to="/about" class="menu">About</Link>
            </li>
            <li className="RouterElm">
              <Link to="/services" class="menu">Services</Link>
            </li>
            <li className="RouterElm">
              <Link to="/gallery" class="menu">Gallery</Link>
            </li>
            <li className="RouterElm">
              <Link to="/faqs" class="menu">FAQs</Link>
            </li>
            <li className="RouterElm">
              <Link to="/contact" class="menu">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About x={width} y={height} />
          </Route>
          <Route path="/services">
            <Services x={width} y={height} />
          </Route>
          <Route path="/gallery">
            <Gallery x={width} y={height} />
          </Route>
          <Route path="/FAQs">
            <FAQs x={width} y={height} />
          </Route>
          <Route path="/contact">
            <Contact x={width} y={height} />
          </Route>
          <Route path="/">
            <Home x={width} y={height} />
          </Route>
        </Switch>
      </div>
      < Footer x={width} y={height} />
    </Router>);
};

const AdaptiveWithDetector = withResizeDetector(AdaptiveComponent);


/*
CustomComponent();
*/
// HEADER
ReactDOM.render(
  <React.StrictMode>
    <AdaptiveWithDetector />
  </React.StrictMode>,
  document.getElementById('header')
);

function Home(props) {

  if (props.x < MOBILETHRESHHOLD) {
    return (
      <div className="home-mobile">
        <div></div>
      </div>

    );
  } else {
    return (
      <div className="home-desktop bg-container">
        <img src={background}></img>
      </div>

    );
  }
}

function BannerElement(props) {

  return (
    <ul className="BannerElmList">
      <li className="BannerElmListSublist">
        <img src={props.iconSource} alt={props.iconAlt} width="20px" height="20px"></img>
      </li>
      <li className="BannerElmListSublist">
        <a href={props.url} target="_blank" class="banner">{props.label}</a>
      </li>
      <li className="BannerElmListSublist">
        <p> {props.content}</p>
      </li>
    </ul>
  )
}

function About(props) {
  console.log("Width: ", props.x)
  if (props.x < MOBILETHRESHHOLD) {

    return (
      <div className="about-mobile">
        <img src={about} alt="OWNERS" className="about-image-desktop" />
        <div className="about-text">
        <div className="story">
          <h2>OUR STORY</h2>
        </div>
        <div className="about-desktop-desc">
          <p>Hope and Bryson began deejaying with company founder<br></br>Charlie Downs in 2020. When business began to boom again in 2021,
          <br></br>Hope and Bryson took over the company and have been running it ever since. <br></br>
            Their goals in deejaying are to bring the music you want with <br></br>the service you deserve in a fun, friendly, customer-first
            environment.
          </p>
          </div>
          </div>
      </div>
    );
  } else {
    return (
      <div className="about-desktop">
        <img src={about} alt="OWNERS" className="about-image-desktop" />
        <div className="about-text">
        <div className="story">
          <h1>OUR STORY</h1>
        </div>
        <div className="about-desktop-desc">
          <p>Hope and Bryson began deejaying with company founder<br></br>Charlie Downs in 2020. When business began to boom again in 2021,
          <br></br>Hope and Bryson took over the company and have been running it ever since. <br></br>
            Their goals in deejaying are to bring the music you want with <br></br>the service you deserve in a fun, friendly, customer-first
            environment.
          </p>
          </div>
          </div>
          </div>
        
    );
  }
}

function Services(props) {

  if (props.x < MOBILETHRESHHOLD) {
    var renderedOutput = services.map(item => <li className="ServicesListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
    return (
      <div className="services-mobile">
        <h2>Services Mobile</h2>
        {renderedOutput}
      </div>
    );
  } else {
    var renderedOutput = services.map(item => <li className="ServicesListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
    return (
      <div className="services-desktop">
        <h1> Services </h1>
        <ul className="ServicesList">
          {renderedOutput}
        </ul>
      </div>
    );
  }
}

function Gallery(props) {
  if (props.x < MOBILETHRESHHOLD) {
    return (
      <h1>hello world</h1>
    );
  } else {
    return (
      <div className="gallery-desktop">
        <GalleryViewer />
      </div>

    );
  }
}

function FAQs(props) {
  if (props.x < MOBILETHRESHHOLD) {
    var renderedOutput = QNAs.map(item => <li className="QNAsListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
    return (
      <div className="FAQsMobile">
        <h1>FAQs Desktop</h1>
        {renderedOutput}
      </div>
    )
  } else {
    var renderedOutput = QNAs.map(item => <li className="QNAsListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
    return (
      <div className="FAQsDesktop">
        <h1>FAQs Desktop</h1>
        <div className="QNAsDesktop">{renderedOutput}</div>
      </div>
    )
  }
}

function Contact(props) {
  if (props.x < MOBILETHRESHHOLD) {
    return (
      <div className="contact-mobile">
        <h1>Cotact Us</h1>
        <form className="contact-form">
          <label for="fname">Name</label>
          <input type="text" id="form-name" value="John"></input> <br></br>
          <label for="fname">Email</label>
          <input type="text" id="form-email" value="JohnDoe@gmail.com"></input><br></br>
          <label for="fname">Phone Number</label>
          <input type="text" id="form-number" value="(XXX) XXX-XXXX"></input><br></br>
          <label for="Message">Message</label>
          <input type="textarea" id="form-message" value="John"></input><br></br>
          <input type="submit" value="submit"></input>
        </form>
      </div>

    )
  } else {
    return (
      <div className="contact-desktop">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label for="fname">Name</label>
          <input type="text" id="form-name" value="John"></input> <br></br>
          <label for="fname">Email</label>
          <input type="text" id="form-email" value="JohnDoe@gmail.com"></input><br></br>
          <label for="fname">Phone Number</label>
          <input type="text" id="form-number" value="(XXX) XXX-XXXX"></input><br></br>
          <label for="Message">Message</label>
          <textarea id="form-message" value="message ..."></textarea><br></br>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

function Footer(props) {
  if (props.x < MOBILETHRESHHOLD) {
    return (
      <div className="BannerListMobile">
        <li className="BannerElm"><BannerElement label="Instagram: @cd_entertainment" iconSource={insta} iconAlt="IG" url="https://www.instagram.com/cd__entertainment/" /></li>
        <li className="BannerElm"><BannerElement label="Phone: (903) 780-9096" iconSource={phone} iconAlt="PHONE" url="tel:9037809096" /></li>
        <li className="BannerElm"><BannerElement label="Email: wearecdentertainment@gmail.com" iconSource={email} iconAlt="EMAIL" url="mailto:wearecdentertainment@gmail.com?Subject=Question%20About%20DJ%20Services" /></li>
      </div>
    )
  } else {
    return (
      <div className="BannerListDesktop">
        <li className="BannerElm"><BannerElement label="Instagram: @cd_entertainment" iconSource={insta} iconAlt="IG" url="https://www.instagram.com/cd__entertainment/" /></li>
        <li className="BannerElm"><BannerElement label="Phone: (903) 780-9096" iconSource={phone} iconAlt="PHONE" url="tel:9037809096" /></li>
        <li className="BannerElm"><BannerElement label="Email: wearecdentertainment@gmail.com" iconSource={email} iconAlt="EMAIL" url="mailto:wearecdentertainment@gmail.com?Subject=Question%20About%20DJ%20Services" /></li>
      </div>

    );
  }
}

function GalleryViewer(props) {

  return (
    <ImageGallery items={images} />
  );

}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
