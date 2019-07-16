import React, { Component } from 'react';
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
// import Admin from "./Dashboard/layouts/Admin.jsx";
// import RTL from "./Dashboard/layouts/RTL.jsx";

// import "./Dashboard/assets/css/material-dashboard-react.css?v=1.7.0";

// const hist = createBrowserHistory();
export default class Home extends Component {
    render() {
        return (
            <div>
              {/* <Router history={hist}>
                <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/rtl" component={RTL} />
                <Redirect from="/" to="/admin/dashboard" />
                </Switch>
              </Router> */}
            </div>
        );
    }
}

  