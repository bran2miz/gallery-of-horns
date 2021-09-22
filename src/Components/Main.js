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
            {this.props.data.map( (value) =>
              <HornedBeasts title={value.title}
                image_url={value.image_url}
                description={value.description}
                horns={value.horns}
                onClick={value.handleClick}
                alt="some-horned-beast" rounded fluid/>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
