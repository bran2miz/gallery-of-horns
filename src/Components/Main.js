import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
  render () {
    let beastArray = this.props.data.map(beast =>
      // mapping through the data using map because it is an array
      <HornedBeasts
        beastarr={beast}
        selectedTheBeast={this.props.selectedTheBeast} />);
      // passing in each beast object as props to horned beasts and it is called beastarr
    return(
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {beastArray}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
