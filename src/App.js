import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
import Post from "./components/post"



class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App" >
        <Post />
      </div>
    );

  }
}

export default App;
