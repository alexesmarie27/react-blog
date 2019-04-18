import React, { Component } from 'react';

class BlogPhoto extends Component {
  render() {
    return (
      <img src={this.props.imagePath} alt={this.props.imageText} />
    );
  }
}

export default BlogPhoto;