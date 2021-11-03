import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Footer from './Footer';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

var mobile = true;

function Navlink (props) {

    console.log(props.goMobile);
    mobile = props.goMobile;

    return (
        <div className="navlink-desktop">
             
            < Footer />
        </div>
        
    );
}

function Home() {
    if (mobile) {
        return <h2>Home Desktop</h2>;
    } else {
        return <h2>Home Mobile</h2>;
    }    
  }
  
  function About() {
    if (mobile) {
        return <h2>About Desktop</h2>;
    } else {
        return <h2>About Mobile</h2>;
    }    
  }
  
  function Users() {
    if (mobile) {
        return <h2>Users Desktop</h2>;
    } else {
        return <h2>Users Mobile</h2>;
    }    
  }

export default Navlink;