import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={this.props.selectedBeast.image_url} alt=''/>
              <Card.Body>
                <Card.Text>
                  <p>Description: {this.props.selectedBeast.description}</p>
                </Card.Text>
                <p>Number of horns: {this.props.selectedBeast.horns}</p>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={this.props.toggleModal}>Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
