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
    photo1:'',
    photo2: '',
    photo3: ''
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

    const data = new FormData();
    data.append('photo1', this.uploadInput.files[0]);
    data.append('photo2', this.uploadInput1.files[0]);
    data.append('photo3', this.uploadInput2.files[0]);
    data.append('nom',this.state.nom);
    data.append('article',this.state.article);
    data.append('prix',this.state.prix)

    fetch('http://localhost:8080/produit', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo1: `http://localhost:8080/produit/${body.photo1}` });
        console.log('sary',body.photo1);
  
      });
      
    });
       this.toggle();
  }
  // handleUploadImage(ev) {
  //   ev.preventDefault();
  //   const newItem = {
  //     photo1: this.uploadInput.files[0],
  //     nom: this.state.nom,
  //     article: this.state.article,
  //     prix: this.state.prix
      
  //    };
  //   console.log(this.uploadInput.files);
  //   this.props.addItem(newItem);
  //   this.toggle();
  // }

 
      
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
                <input ref={(ref) => { this.uploadInput1 = ref; }} type="file" name="photo2"/>
                <input ref={(ref) => { this.uploadInput2 = ref; }} type="file" name="photo3"/>
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
