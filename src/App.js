import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import Tabs from "./components/Tabs";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Tabs />
      </div>
    );
  }
}

export default App;
