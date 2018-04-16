import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {actionlogin} from '../actions/loginactions';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import history from "./history";
import { Link } from 'react-router-dom';
import Welcome from "./Welcome";
//import history from "./history";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            Passwrd: '',
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/welcome');
    }


    render() {

        if (this.props.loggedin===true){
            // {/*<Alert color="primary">*/}
            //     {/*Loggedin Successfully!*/}
            // {/*</Alert>*/}
            this.navigate();
        }






        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                </div>

                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.passwrd}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.log(this.state)}>
                                Login
                            </button>



                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.stores.login,
        // userid
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
