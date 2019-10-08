import React, {Component} from 'react';
import './App.css';
import Welcome from './Welcome';
// import styled,  {css} from "styled-components";

class App extends Component{

  render(){
    return (
      <div className="App">
        <Welcome name="CryptoDash"/>
      </div>
    );

  }
}

export default App;
