import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    currentPost: null,
  }

  createTextBlock() {
    // TODO
  }

  createPhotoBlock() {
    // TODO
  }

  render() {
    return (
      <div className="App">
        {this.state.currentPost}
        <button onClick={() => this.createTextBlock()}>Create Text Block</button>
        <button onClick={this.createPhotoBlock()}>Create Photo Block</button>
      </div>
    );
  }
}

export default App;
