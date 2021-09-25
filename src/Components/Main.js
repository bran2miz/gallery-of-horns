import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
  render () {
    return(
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {this.props.data.map(beast =>
              <HornedBeasts beastarr={beast} />
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
