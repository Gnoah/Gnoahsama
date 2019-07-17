import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
//import { MDBRow, MDBCol } from "mdbreact";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addProduit } from '../../actions/authentication';

class ItemModal extends Component {
  state = {
    modal: false,
    nom: '',
    article: '',
    prix: '',
    photo_produit: ''
  };

  // componentDidMount() {
  //   this.props.getProduits();
  // }

  // onDeleteClick = id => {
  //   this.props.deleteProduit(id);
  // };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      nom: this.state.nom,
      article: this.state.article,
      prix: this.state.prix,
      photo_produit: this.state.photo_produit
    };

    this.props.addProduit(newItem);

    this.toggle();
  };

  render() {
    return (
      <div className="container">
        <MDBBtn outline color="secondary"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </MDBBtn>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Produit</Label>
                <Input type="text" name="nom" id="item" placeholder="Nom de produit" onChange={this.onChange} />
                <Label for="item">Article</Label>
                <Input type="text" name="article" id="item" placeholder="Article" onChange={this.onChange} />
                <Label for="item">Prix</Label>
                <Input type="number" name="prix" id="item" placeholder="prix" onChange={this.onChange} />
                <Input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_produit"/>
                <MDBBtn outline color="primary" style={{ marginTop: '2rem' }} block>
                  Ajouter Produit
                </MDBBtn>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        {/* <div className="card-deck">    
                    {this.state.produit.length > 0 ? (  
                        this.state.produit.map(obj => (
                            <MDBCol md="4" className="colone">
                            <div className="card">
                                <img src={'http://localhost:8080/produit/user/'+obj.photo_produit} alt="pdp" alt="upload images"/>
                                <div className="card-body">
                                    <h5 className="card-title">{obj.nom}</h5>
                                    <p>{obj.article}</p>
                                    <h2>{obj.prix}</h2>
                                    <MDBBtn outline color="danger" size="sm"
                                     onClick={this.onDeleteClick.bind(this, obj.nom, obj.article, obj.prix, obj.photo_produit)}>x</MDBBtn>
                                </div>
                            
                            </div>  
                            </MDBCol>    
                            ))
                ) : ''}  
                
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  produit: state.produi
});

export default connect(
  mapStateToProps,
  { addProduit }
)(ItemModal);