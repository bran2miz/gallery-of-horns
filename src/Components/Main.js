import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
  render () {
    let beastArray = this.props.data.map(beast =>
      <HornedBeasts
        beastarr={beast}
        selectedTheBeast={this.props.selectedTheBeast} />);
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
