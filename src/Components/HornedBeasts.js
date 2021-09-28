import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import heart from '../img/heart.png';
import '../App.css';

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteBeast: 0,
    };
  }
  vote = () => {
    this.setState({
      voteBeast: this.state.voteBeast + 1,
    });
  };
  //sendBeast = () => this.props.selectBeast(this.props.beastarr.title);

  render(){
    return(
      <div className="frontCard">
        <Card className="uni-card" bg='info' style={{width: '20rem', height: '43rem'}}border='primary'>
          <Card.Title><h2>{this.props.beastarr.title}</h2></Card.Title>
          <img alt=''/>
          <Card.Img variant="top" onClick={() => this.props.selectedTheBeast(this.props.beastarr.title)} src={this.props.beastarr.image_url} alt={this.props.beastarr.keyword} />
          <Card.Body>
            <Card.Text>
              <p>Description: {this.props.beastarr.description}</p>
            </Card.Text>
            <p>Number of horns: {this.props.beastarr.horns}</p>
            <span>Number of times liked: {this.state.voteBeast}</span>
            <p>Click on the Heart to Like! <img src={heart} onClick={this.vote} width='20px' height='auto' alt='heart'/></p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
