import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render(){
    return(
      <>
        <h3>Created by: {this.props.author}</h3>
      </>
    );
  }
}

export default Footer;
