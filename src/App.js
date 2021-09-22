import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      beastData: data,
    };
  }
  render(){
    return (
      <Container>
        <Header title="Gallery of Horns"/>
        <Main data= {this.state.beastData} />
        <Footer text="This is Site is Created by Brandon Mizutani"/>
      </Container>
    );
  }
}

export default App;
