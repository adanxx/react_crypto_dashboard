import React, {Component} from 'react';
import './App.css';
import Welcome from './Welcome';
// import styled,  {css} from "styled-components";
import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends Component{

  render(){
    return (
      <AppLayout>
        <AppBar/>
         <Welcome name="CryptoDash"/>
      </AppLayout>
      
    );
  }
}

export default App;
