import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.modalOn}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <Card.Img variant="top" src={this.props.image_url} alt=''/>
                <Card.Body>
                  <Card.Text>
                    <p>Description: {this.props.description}</p>
                  </Card.Text>
                  <p>Number of horns: {this.props.horns}</p>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" onClick={this.props.modalOn}>Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
