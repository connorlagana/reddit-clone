import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  onChange = (e) => {
    const content = e.target.value

    this.setState({
      content: content
    })

  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.postSubmit}>
          <input
            type="textarea"
            name="content"
            value={this.state.content}
            placeholder="POST IT"
            onChange={this.onChange}
          />

          <input
            type="submit"
            name="content"
            value="Post"
            placeholder="POST IT"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }

}

export default App;
