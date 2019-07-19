import React, { Component } from 'react';
import { MDBRow,MDBCol,MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import ReactImageMagnify from 'react-image-magnify';
//import ImageZoom from 'react-medium-image-zoom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions.js';
import PropTypes from 'prop-types';
//import Avatar from 'react-avatar';
import './components.css'


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
        <ListGroup>
          <TransitionGroup className="shopping-list">
          <MDBRow>
                {items.map(({ _id, nom,article,prix,photo1,photo2,photo3 }) => (
                  <MDBCol lg="3" md="4" className="mb-lg-0">
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                      <ListGroupItem>
                      <MDBCard cascade narrow ecommerce>
                     <CSSTransition key={_id} timeout={500} classNames="fade">
                      <ListGroupItem>
                        <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                      {/* <MDBCardImage
                        cascade
                        src={'http://localhost:8080/user/'+ photo1}
                        top
                        alt="sample photo"
                        overlay="white-slight"
                      /> */}
                      {/* <ImageZoom
                        image={{
                          src: 'http://localhost:8080/user/'+ photo1,
                          alt: 'Golden Gate Bridge',
                          className: 'img',
                          style: { width: '20em' }
                        }}
                        zoomImage={{
                          src: 'http://localhost:8080/user/'+ photo1,
                          alt: 'Golden Gate Bridge'
                        }}
                      /> */}
                      <ReactImageMagnify {...{   smallImage: {
                              alt: 'one',
                              isFluidWidth: true,
                              src:'http://localhost:8080/user/'+ photo1
                          },
                          largeImage: {
                              src: 'http://localhost:8080/user/'+ photo1,
                              width: 800,
                              height: 1200
                          }
                        }} />
                        <ReactImageMagnify {...{   smallImage: {
                              alt: 'two',
                              isFluidWidth: true,
                              src:'http://localhost:8080/user/'+ photo2
                          },
                          largeImage: {
                              src: 'http://localhost:8080/user/'+ photo2,
                              width: 800,
                              height: 1200
                          }
                        }} />
                        <ReactImageMagnify {...{   smallImage: {
                              alt: 'three',
                              isFluidWidth: true,
                              src:'http://localhost:8080/user/'+ photo3
                          },
                          largeImage: {
                              src: 'http://localhost:8080/user/'+ photo3,
                              width: 800,
                              height: 1200
                          }
                        }} />
                      <MDBCardBody cascade className="text-center">
                        <a href="#!" className="grey-text">
                          <h5></h5>
                        </a>
                        <MDBCardTitle>
                          <strong>
                            <a href="#!">{ nom }</a>
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
                      </ListGroupItem>
                      </CSSTransition>
                    </MDBCard>
                  {/* <MDBCard cascade narrow ecommerce>
                   <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                      <ReactImageMagnify {...{   smallImage: {
                              alt: 'Wristwatch by Ted Baker London',
                              isFluidWidth: true,
                              src:'http://localhost:8080/user/'+ photo2
                          },
                          largeImage: {
                              src: 'http://localhost:8080/user/'+ photo2,
                              width: 800,
                              height: 1200
                          }
                        }} />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                      </MDBCardTitle>
                      <MDBCardText>
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left font-weight-bold">
                          <strong></strong>
                        </span>
                        <a href="#!" data-toggle="tooltip" data-placement="top" title="Ajouter au panier"> 
                          <i class="fas fa-shopping-cart grey-text ml-3"></i> 
                        </a>
                      </MDBCardFooter>
                    </MDBCardBody>
                    </ListGroupItem>
                    </CSSTransition>
                  </MDBCard>

                  <MDBCard cascade narrow ecommerce>
                   <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                      <ReactImageMagnify {...{   smallImage: {
                              alt: 'Wristwatch by Ted Baker London',
                              isFluidWidth: true,
                              src:'http://localhost:8080/user/'+ photo3
                          },
                          largeImage: {
                              src: 'http://localhost:8080/user/'+ photo3,
                              width: 800,
                              height: 1200
                          }
                        }} />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                      </MDBCardTitle>
                      <MDBCardText>
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left font-weight-bold">
                          <strong></strong>
                        </span>
                        <a href="#!" data-toggle="tooltip" data-placement="top" title="Ajouter au panier"> 
                          <i class="fas fa-shopping-cart grey-text ml-3"></i> 
                        </a>
                      </MDBCardFooter>
                    </MDBCardBody>
                    </ListGroupItem>
                    </CSSTransition>
                  </MDBCard> */}
                      </ListGroupItem>
                    </CSSTransition>
                  </MDBCol>
                ))}
            
            </MDBRow>
          </TransitionGroup>
        </ListGroup>
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
