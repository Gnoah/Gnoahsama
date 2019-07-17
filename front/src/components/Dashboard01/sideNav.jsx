import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      {/* <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a> */}
      <MDBListGroup className="list-group-flush" id="lien-dasboard-total">
        <NavLink id="lien-dasboard" exact={true} to="/">
          <MDBListGroupItem>
            <MDBIcon icon="home" className="mr-3" /> Home </MDBListGroupItem>
        </NavLink>
        <NavLink id="lien-dasboard" to="/login" >
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" /> Mon produit </MDBListGroupItem>
        </NavLink>
        <NavLink id="lien-dasboard" to="/register" >
          <MDBListGroupItem icon="euro-sign" className="mr-3">Achat </MDBListGroupItem>
        </NavLink> <NavLink id="lien-dasboard" to="/protection">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" /> Ajout Protéction </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
}
export default TopNavigation;