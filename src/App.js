import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './Components/SelectedBeast.js';
// lab for July 13th 2022

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      beastData: data,
      selectedBeast: {},
      showModal: true
    };
  }
  // constructor function that includes the state that has the data from data.json, a dictionary that we will add the beasts titles in, and the Modal display on to true; it will change the modal from true to false.

  toggleModal = () => {
    (this.state.showModal) ? this.setState({showModal: false}): this.setState({showModal: true});
  }
  // toggleModal is a function that incorporates an arrow function. If showModal is true, then set the state to false. Otherwise if showModal is false, set showModal to true.
  // this will enable the modal to appear if it is false and disappear if false.

selectTheBeast = (beastTitle) => {
  console.log(`selectTheBeast: ${beastTitle}`);
  let aBeast = this.state.beastData.find(item => item.title === beastTitle);
  this.setState({selectedBeast: aBeast});
  this.toggleModal();
}
// create an variable that will return the first item to the last item based on the title.
// set state will enqueue changes to the component state and will update the state to its children passed down.

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
  //will pass data as state into <Main> and the function selectTheBeast as selectedTheBeast.
  //pass showModal as state and selectedBeast as state (selectedBeast is changed when using setState)functions of toggleModal in SelectedBeast
  //selected beast will be the modal
}
}

export default App;
