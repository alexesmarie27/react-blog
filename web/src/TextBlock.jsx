import React, { Component } from 'react';

class TextBlock extends Component {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}

export default TextBlock;