import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './Components/SelectedBeast.js';
import HornedForm from './Components/HornedForm.js';

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
    (this.state.showModal) ? this.setState({showModal: false}): this.setState({showModal: true });
  }

selectTheBeast = (beastTitle) => {
  console.log(`selectTheBeast: ${beastTitle}`);
  let aBeast = this.state.beastData.find(item => item.title === beastTitle);
  this.setState({ selectedBeast: aBeast });
  this.toggleModal();
}

filteredHorn = (valueOfHorns) => {
  if(valueOfHorns === 'default') {
    this.setState({beastData: data});
  } else {
    let filteredHorn = data.filter(value => value.horns === parseInt(valueOfHorns));
    this.setState({beastData: filteredHorn});
  }
}
render(){
  return (
    <>
      <Container className="gallery-horns">
        <Header title="✨Galaxy of Horns✨"/>
        <HornedForm
          filteredHorn ={this.filteredHorn}
          numHorns={this.numHorns}
        />
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
