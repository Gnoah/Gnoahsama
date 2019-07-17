import React, { Component } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
//import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProduits, deleteProduit } from '../../actions/authentication';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getProduits();
  }

  onDeleteClick = id => {
    this.props.deleteProduit(id);
  };

  render() {

    return (
    <MDBRow>
                <div className="card-deck">    
                    {this.props.produit.length > 0 ? (  
                        this.props.produit.map(obj => (
                            <MDBCol md="4" className="colone">
                            <div className="card">
                                <img src={'http://localhost:8080/produit/user/'+obj.photo_produit} alt="pdp" alt="upload images"/>
                                <div className="card-body">
                                    <h5 className="card-title">{obj.nom}</h5>
                                    <p>{obj.article}</p>
                                    <h2>{obj.prix}</h2>
                                </div>
                            </div>  
                            </MDBCol>    
                            ))
                ) : ''}  
                
                </div>
            </MDBRow>
            //  {this.state.produits.map(({ _id, nom, article, prix, photo_produit }) => (
            //   <CSSTransition key={_id} timeout={500} classNames="fade">
            //     <ListGroupItem>
            //       <Button
            //         className="remove-btn"
            //         color="danger"
            //         size="sm"
            //         onClick={this.onDeleteClick.bind(this, _id, nom, article, prix, photo_produit)}
            //       >
            //         &times;
            //       </Button>
            //       {nom}
            //     </ListGroupItem>
            //   </CSSTransition>
            // ))} 
    );
  }
}

ShoppingList.propTypes = {
  getProduits: PropTypes.func.isRequired,
  produit: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  produit: state.produit
});

export default connect(
  mapStateToProps,
  { getProduits, deleteProduit }
)(ShoppingList);