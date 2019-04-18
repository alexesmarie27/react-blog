import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPost from './BlogPost';
import TextBlock from './TextBlock';
import BlogPhoto from './BlogPhoto';

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
        <BlogPost>
          <p>
            This is a test. This is a test. This is a test. This is a test.
            This is a test. This is a test. This is a test. This is a test.
            This is a test. This is a test.
          </p>
        </BlogPost>
        <BlogPost>
          <TextBlock>
            This is another test. This is another test. Styling will be put
            around this.
          </TextBlock>
        </BlogPost>
      </div>
    );
  }
}

export default App;
