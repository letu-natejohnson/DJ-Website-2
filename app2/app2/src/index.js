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





import reportWebVitals from './reportWebVitals';
import { findByLabelText } from '@testing-library/dom';

var mobi = false;


var MOBILETHRESHHOLD = 700;

var services = [ 
  ["Generic", "Service desc"],
  ["Generic #2", "Another service desc"],
  ["Generic #3", "Another service desc"],
  ["Generic #4", "Another service desc"] ,
  ["Generic #5", "Another service desc"] ,
  ["Generic #6", "Service desc"],
  ["Generic #7", "Another service desc"] ,
  ["Generic #8", "Another service desc"],
  ["Generic #9", "Another service desc"] ,
  ["Generic #10", "Another service desc"] ,
  ["Generic #11", "Another service desc"] ,
  ["Generic #12", "Another service desc"] 
]

var galleryPhotos = [
  "https://images.ctfassets.net/hrltx12pl8hq/5Dp0tKk1E51g8tKoGZiMpk/73255b014aac62b317fc0d40334862e9/Wedding.jpg?fit=fill&w=480&h=270",
  "https://media.istockphoto.com/photos/fixing-grooms-bowtie-at-a-wedding-picture-id1037721924?k=20&m=1037721924&s=612x612&w=0&h=Z3tcxzVrNJE2ZTcrMtIUwMI5qd2nqbLFRINyMHkHG3s=",
  "https://media.istockphoto.com/photos/best-man-performing-speech-for-toast-at-wedding-reception-picture-id941382378?k=20&m=941382378&s=612x612&w=0&h=cUnBZr-Mn_dK9lHf1xkVckyLn_8TJH9L8uLZ0SjB-80="
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



const AdaptiveComponent = ({ width, height }) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    setColor(width > 500 ? 'red' : 'blue');
  }, [width]);


  return (
    <Router>
    <div className = "Router">
    <nav >
    <ul className="RouterList">
        <li className="RouterElm">
        <Link to="/">Home</Link>
        </li>
        <li className="RouterElm">
        <Link to="/about">About</Link>
        </li>
        <li className="RouterElm">
        <Link to="/services">Services</Link>
        </li>
        <li className="RouterElm">
        <Link to="/gallery">Gallery</Link>
        </li>
        <li className="RouterElm">
        <Link to="/faqs">FAQs</Link>
        </li>
        <li className="RouterElm">
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/about">
            <About  x={width} y={height}/>
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
          <h1>CD Entertainment</h1>
        </div>
        
      );
  } else {
    return (
      <div className="home-desktop">
        <h1>CD Entertainment</h1>
      </div>
      
    );
  }    
}

function About(props) {
  console.log("Width: " , props.x)
  if (props.x < MOBILETHRESHHOLD) {
   
      return (
        <div className="about-mobile">
        <h1>About Us</h1>
        <img src="about.png" alt="OWNERS"/>
        <div className="about-mobile-desc">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
         <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
         <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
         <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        
        </div>
       </div>
      );
  } else {
      return (
        <div className="about-desktop">
         <h1>About Us</h1>
         <img src="about.png" alt="OWNERS"/>
         <div className="about-desktop-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
          <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
          <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
         
         </div>
        </div>
      );
  }    
}

function Services(props) {
  
  if (props.x < MOBILETHRESHHOLD) {
    var renderedOutput = services.map(item =>  <li className = "ServicesListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
    return (
        <div className = "services-mobile">
         <h2>Services Mobile</h2>
          { renderedOutput }
        </div>
      );
  } else {
    var renderedOutput = services.map(item =>  <li className = "ServicesListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
      return (
        <div className = "services-desktop">
          <h1> Services </h1>
          <ul className = "ServicesList">
            { renderedOutput }
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
          <h1> Gallery </h1>
        <GalleryViewer />
        </div>
        
        );
  }    
}

function FAQs(props) {
  if (props.x < MOBILETHRESHHOLD) {
    var renderedOutput = QNAs.map(item =>  <li className = "QNAsListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
      return (
        <div className="FAQsMobile">
        <h1>FAQs Desktop</h1>
        { renderedOutput }
        </div>
      )
  } else {
    var renderedOutput = QNAs.map(item =>  <li className = "QNAsListElm"> <h2> {item[0]} </h2> <p>  {item[1]} </p> </li>);
      return (
        <div className="FAQsDesktop">
          <h1>FAQs Desktop</h1>
          <div className="QNAsDesktop">{ renderedOutput }</div>
        </div>
      )
  }    
}

function Contact(props) {
  if (props.x < MOBILETHRESHHOLD) {
    return (
      <div className = "contact-mobile">
        <h1>Cotact Us</h1>
        <form className="contact-form">
        <label for="fname">Name</label>
        <input type="text" id= "form-name" value="John"></input> <br></br>
        <label for="fname">Email</label>
        <input type="text" id= "form-email" value="JohnDoe@gmail.com"></input><br></br>
        <label for="fname">Phone Number</label>
        <input type="text" id= "form-number" value="(XXX) XXX-XXXX"></input><br></br>
        <label for="Message">Message</label>
        <input type="textarea" id= "form-message" value="John"></input><br></br>
          <input type="submit" value="submit"></input>
      </form>
      </div>
     
    )
  } else {
      return (
        <div className = "contact-desktop">
        <h1>Contact Us</h1>
        <form className="contact-form">
        <label for="fname">Name</label>
        <input type="text" id= "form-name" value="John"></input> <br></br>
        <label for="fname">Email</label>
        <input type="text" id= "form-email" value="JohnDoe@gmail.com"></input><br></br>
        <label for="fname">Phone Number</label>
        <input type="text" id= "form-number" value="(XXX) XXX-XXXX"></input><br></br>
        <label for="Message">Message</label>
        <textarea id= "form-message" value="message ..."></textarea><br></br>
          <input type="submit" value="submit"></input>
      </form>
      </div>
      )
  }    
}

function Footer(props) {
  if (props.x < MOBILETHRESHHOLD) {
      return (
        <div className = "bannerMobile">
        <ul className="BannerListMobile">
        <li className="BannerElm"><BannerElement label="Instagram :" content="@CD_Entertainment" iconSource="https://cdn-icons-png.flaticon.com/512/174/174855.png" iconAlt="IG" /></li>
        <li className="BannerElm"><BannerElement label="Phone :" content="(XXX) XXX-XXXX" iconSource="phone.png" iconAlt="PHONE" /></li>
        <li className="BannerElm"><BannerElement label="Email :" content="hello@cdentertainment.com" iconSource="email.png" iconAlt="EMAIL" /></li>
        </ul>
      </div>
      )
  } else {
      return (
        <div className = "bannerDesktop">
          <ul className="BannerListDesktop">
          <li className="BannerElm"><BannerElement label="Instagram :" content="@CD_Entertainment" iconSource="./insta.png" iconAlt="IG" /></li>
          <li className="BannerElm"><BannerElement label="Phone :" content="(XXX) XXX-XXXX" iconSource="phone.png" iconAlt="PHONE" /></li>
          <li className="BannerElm"><BannerElement label="Email :" content="hello@cdentertainment.com" iconSource="email.png" iconAlt="EMAIL" /></li>
          </ul>
        </div>
        
      );
  }    
}

function GalleryViewer (props) {
 
  if (gallery_index < galleryPhotos.length || gallery_index < 0) { gallery_index = 0 }
  var gallery_index = 0;
  var current_photo = galleryPhotos[gallery_index];
  
  return (
   
    <ul className =" GalleryViewer">
   
    <li>
      <button className = "ViewControlLeft" onClick={ () => {gallery_index -= 1}}><img src="https://static.thenounproject.com/png/2354422-200.png" width={50} height={50}/> </button>
    </li>
    <li>
    <img src={current_photo} alt="Galler photo"></img>
    </li>
    <li>
    <button className = "ViewControlRight" onClick={ () => {gallery_index += 1} }><img src="https://static.thenounproject.com/png/2354422-200.png" width={50} height={50}/> </button>
    </li>
  </ul>

    
  )
}

function BannerElement (props) {
    
    return (
      <ul className="BannerElmList">
        <li className="BannerElmListSublist">
          <img src={props.content} alt={props.iconAlt}></img>
        </li>
        <li className="BannerElmListSublist">
          <p>{props.label} </p>
        </li>
        <li className="BannerElmListSublist">
          <p> {props.content}</p>
        </li>
      </ul>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
