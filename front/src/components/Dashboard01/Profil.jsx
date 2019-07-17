
import React, { Component } from 'react';
import axios from 'axios';


export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { newUser: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user')
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
            <div className="table-responsive">
                <div className="table">
                    <div>
                        {
                            (this.state.newUser.length > 0) ? (this.state.newUser.map((obj) => {
                                return <tr key={obj._id}>
                                    <h1>{obj.name}</h1>
                                    {/* <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td><img width="150px" height="50px" src={'http://localhost:8080/user/'+obj.photo_profil} alt="pdp" />
                                    </td> */}
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </div>
                </div>
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