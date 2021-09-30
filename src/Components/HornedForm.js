import React from 'react';
import Form from 'react-bootstrap/Form';
import {Component} from 'react';
import '../App.css';

class HornedForm extends Component {
  constructor(props) {
    super(props);
    this.state= {};
  }


numHorns = event => {
  event.preventDefault();
  this.props.filteredHorn(event.target.value);
};

render() {
  return(
    <div className="horned-form">
      <Form>
        <Form.Label className="horned-header">Horn Filter!</Form.Label>
        <Form.Control as="select" onChange={this.numHorns} style={{width: '300px'}}>
          <option value="default"> Filter beast by amount of horns</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Hundred</option>
        </Form.Control>
      </Form>
    </div>
  );
}

}

export default HornedForm;
