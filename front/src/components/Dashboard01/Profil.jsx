
import React, { Component } from 'react';

export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { newUser: [] };

    }
    componentDidMount() {
        this.setState({newUser:localStorage.getItem('jwtToken')})
        console.log(this.state.newUser);
        
    }

    render() {
        return (
            <div>
                 <div className="row">
                    <div className="col-md-4"> </div>
                        <h1>Bonjour {this.state.newUser}</h1>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}