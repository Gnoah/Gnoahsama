import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Acceuil from './components/Acceuil/Acceuil';
import Footer from './components/Footer/footer';
import Slide from './components/Acceuil/Slide';
//import Chart from './components/Produit/charts'

import Navbar from './components/Navbar';
//import Shopping from './components/Produit/shopping';
import Home from './components/Home';
import Signin from './components/signin';
import Signup from './components/signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <div className="container">
                <div className="col-md-8"> </div>
                <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </div>
              <Navbar />
                <Route exact path="/welcome" component={ Home }/>
                {/* <Route exact path="/welcome" component={ Shopping }/>
                <Route exact path="/welcome" component={ Chart } /> */}
                <div className="">
                  <Route exact path="/register" component={ Signup } />
                  <Route exact path="/login" component={ Signin } />
                  <Route exact path="/" component={ Slide } />
                  <Route exact path="/" component={ Acceuil } />
                  
                </div>
                <div>
                  <Footer />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
