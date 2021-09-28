import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './Components/SelectedBeast.js';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      beastData: data,
      selectedBeast: {},
      showModal: true
    };
  }

  toggleModal = () => {
    (this.state.showModal) ? this.setState({showModal: false}): this.setState({showModal: true});
  }

selectTheBeast = (beastTitle) => {
  console.log(`selectTheBeast: ${beastTitle}`);
  let aBeast = this.state.beastData.find(item => item.title === beastTitle);
  this.setState({selectedBeast: aBeast});
  this.toggleModal();
}

render(){
  return (
    <>
      <Container>
        <Header title="Gallery of Horns"/>
        <Main data={this.state.beastData} selectedTheBeast={this.selectTheBeast} />
        <Footer author="Brandon Mizutani"/>
      </Container>
      <SelectedBeast
        selectedBeast={this.state.selectedBeast}
        showModal={this.state.showModal}
        toggleModal={this.toggleModal}
      />
    </>
  );
}
}

export default App;
