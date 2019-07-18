import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { MDBBtn } from "mdbreact";

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  constructor(props) {
  super(props);
  this.state = {
    modal: false,
    nom: '',
    article: '',
    prix:'',
    photo1:''
  };
  this.onChange = this.onChange.bind(this);
  this.handleUploadImage = this.handleUploadImage.bind(this);
}

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUploadImage(ev) {
    ev.preventDefault();
    const newItem = {
      nom: this.state.nom,
      article: this.state.article,
      prix: this.state.prix,
      photo1: this.uploadInput.files[0]
     };
    this.props.addItem(newItem);

    this.toggle();
    
  }

  // onSubmit = e => {
  //   e.preventDefault();

  //   const newItem = {
  //     nom: this.state.nom,
  //     article: this.state.article,
  //     prix: this.state.prix,
  //     photo1: this.uploadInput.files[0]
  //   };

  //   this.props.addItem(newItem);

  //   this.toggle();
  // };

  render() {
    return (
      <div>
        <div className="row">
        <div className="col-md-5"></div>
          <div className="col-md-4">
            <MDBBtn outline color="secondary"
              style={{ marginBottom: '2rem' }}
              onClick={this.toggle}
            >
              Add Produit
            </MDBBtn>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add List Produit</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleUploadImage}>
              <FormGroup>
                <Label for="item">Produit</Label>
                <Input type="text" name="nom" id="item"  placeholder="Add name" onChange={this.onChange}/>
                <Input type="text" name="article" id="item"  placeholder="Add article" onChange={this.onChange}/>
                <Input type="number" name="prix" id="item"  placeholder="Add prix" onChange={this.onChange}/>
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo1"/>
                <Button color="blue" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
