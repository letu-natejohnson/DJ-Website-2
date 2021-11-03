import React, { Component } from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import Paragraph from './Paragraph.js';
import './App.css';

class App extends Component {

state = {
    images: [],
    qnas: [],
    services: []
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
      this.callBackendAPI()
      .then(res => this.setState(JSON.parse(res.express)))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/content_server');
    const body = await response.json();

    //console.log(state.map(e => ({ label: e.id, value: e.desc })));
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    //Parse body
    var xprs = JSON.parse(body.express);
    //Log responses
    console.log("Parsed response:",xprs);
    console.log("Images:",xprs.images);
    console.log("Q&A's:",xprs.qnas);
    console.log("Services:",xprs.services);

    

    // Assign state values
    for (var x in xprs.images) {
      this.state.images.push(new String(x));
    }
    for (var x in  xprs.qnas) {
      this.state.qnas.push(new Object(xprs.qnas[x]));
    }
    for (var x in xprs.services) {
      this.state.services.push(new Object(xprs.services[x]));
     // console.log();
    }
    console.log("Local state: ", this.state);

    console.log(typeof(this.state.services[0][0]));
    console.log(this.state.services[0][0]);


    return body;
    
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">
          <ul id="list">{this.state.services}</ul>
          </p>

      </div>
    );
  }
}

export default App;