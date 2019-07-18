
import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';

export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { newUser: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/me')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ newUser: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div>
            <div className="row">
                <div className="col-md-3"> </div>
                        {
                            (this.state.newUser.length > 0) ? (this.state.newUser.map((obj) => {
                                return <div key={obj._id}>
                                         
                                            <h1>{obj.name}</h1>
                                            <div className="col-md-1"></div>
                                            <div className="col-md-4">
                                                <Avatar size="300"  src={'http://localhost:8080/username/'+ obj.photo1} round="200px"/>
                                            </div>
                                            <div className="col-md-1"></div>
                                 </div>

                            })) : ('')
                        }
               <div className="col-md-3"></div>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}