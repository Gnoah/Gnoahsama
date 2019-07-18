import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
    
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Denim trousers</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>49$</strong>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </section>
  );
}

export default EcommercePage;



<Container>
        <MDBRow>
        <ListGroup>
          <TransitionGroup className="shopping-list">
                {items.map(({ _id, nom,article,prix,photo1 }) => (
              <MDBCol lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard cascade narrow ecommerce>
                     <CSSTransition key={_id} timeout={500} classNames="fade">
                      <ListGroupItem>
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
                      </ListGroupItem>
                      </CSSTransition>
                    </MDBCard>
              </MDBCol>
              
                ))}
          </TransitionGroup>
        </ListGroup>
        </MDBRow>
      </Container>