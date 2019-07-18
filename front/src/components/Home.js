import React from 'react';
//import SideNav from './Dashboard01/sideNav';
//import Produit from './Produit/itemsModal';
import Test from './Dashboard01/test'
import Modal from './ItemModal'
import Shop from './ShoppingList'

class Home extends React.Component {

  render() {
   
    return (
      <div className="">
          <Test/>
          <Modal />
          <Shop />
      </div>
    );
  }
}

export  default Home;