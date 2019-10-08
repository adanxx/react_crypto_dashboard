import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import {AppProvider} from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Welcome name="CryptoDash" />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
