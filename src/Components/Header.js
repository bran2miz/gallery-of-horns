import React from 'react';
import '../App.css';

class Header extends React.Component {
  render(){
    return(
      <div className="horn-title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
