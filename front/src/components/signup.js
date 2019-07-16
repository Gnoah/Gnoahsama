
import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBInput } from "mdbreact";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

import "bootstrap/dist/css/bootstrap.css"
import 'react-confirm-alert/src/react-confirm-alert.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div id="corps">
          <MDBRow>
          <MDBCol md="0,5"></MDBCol>
            <MDBCol md="6"  className="mx-auto mt-2">
              <MDBCard>
                <MDBCardBody className="mx-6">

                  <h2 className="text text-primary">Signup </h2>
                  <form onSubmit={ this.handleSubmit }>
                  <div id="name">
                    <MDBInput label="Your Username" group type="text" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.name })} name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }/>
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                  <div id="mail">
                    <MDBInput label="email" group type="email" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.email })} name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }/>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  </div>
                  <div id="password">
                    <MDBInput label="password" group type="password" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password })}  name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }/>
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                  </div>
                  <div id="password2">
                    <MDBInput label="confirm password" group type="password" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password_confirm })} name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }/>
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                  </div>
                    <MDBBtn type="submit" gradient="purple" id="bt" ><a>Inscrire</a></MDBBtn>{this.state.message}

                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>

    );
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))