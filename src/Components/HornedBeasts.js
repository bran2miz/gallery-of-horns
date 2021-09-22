import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import heart from '../img/heart.png';


class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteBeast: 0
    };
  }
  vote = () => {
    this.setState({
      voteBeast: this.state.voteBeast + 1,
    });
  }

  render(){
    return(
      <div>
        <Card bg='secondary' style={{width: '18rem', height: '38rem'}} border='info'>
          <Card.Title><h2>{this.props.title}</h2></Card.Title>
          <img />
          <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} />
          <Card.Body>
            <Card.Text>
              <p>Description: {this.props.description}</p>
            </Card.Text>
            <p>Number of horns: {this.props.horns}</p>
            <span>Number of times liked: {this.state.voteBeast}</span>
            <img src={heart} onClick={this.vote} width='20px' height='auto' />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;