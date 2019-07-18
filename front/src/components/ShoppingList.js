import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions.js';
import PropTypes from 'prop-types';
//import Avatar from 'react-avatar';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <MDBRow>
        <ListGroup>
          <TransitionGroup className="shopping-list">
          <section className="text-center my-5">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                {items.map(({ _id, nom,article,prix,photo1 }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <MDBCard cascade narrow ecommerce>
                    <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                      <MDBCardImage
                        cascade
                        src={'http://localhost:8080/user/'+ photo1}
                        top
                        alt="sample photo"
                        overlay="white-slight"
                      />
                      <MDBCardBody cascade className="text-center">
                        <a href="#!" className="grey-text">
                          <h5>{ nom }</h5>
                        </a>
                        <MDBCardTitle>
                          <strong>
                            <a href="#!">Good Shop</a>
                          </strong>
                        </MDBCardTitle>
                        <ul className="rating">
                          <li>
                            <MDBIcon icon="star" />
                          </li>
                        </ul>
                        <MDBCardText>
                        </MDBCardText>
                        <MDBCardFooter className="px-1">
                          <span className="float-left font-weight-bold">
                            <strong>{ prix }$</strong>
                          </span>
                          <a href="#!" data-toggle="tooltip" data-placement="top" title="Ajouter au panier"> 
                            <i class="fas fa-shopping-cart grey-text ml-3"></i> 
                          </a>
                        </MDBCardFooter>
                        <h2>{ article }</h2>
                      </MDBCardBody>
                    </MDBCard>
                  
                  
              
                </ListGroupItem>
              </CSSTransition>
                ))}
                </MDBCol>
            </section>
          </TransitionGroup>
        </ListGroup>
        </MDBRow>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);