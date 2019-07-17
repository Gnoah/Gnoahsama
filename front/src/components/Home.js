import React from 'react';
import SideNav from './Dashboard01/sideNav';
import Produit from './Produit/itemsModal'
import Profil from './Dashboard01/Profil'

class Home extends React.Component {

  render() {
   
    return (
      <div className="">
          <Profil/>.
          <SideNav/>
          <Produit/>
      </div>
    );
  }
}

export  default Home;