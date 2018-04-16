import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Projects from "./Projects";

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        passwrd: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            passwrd: ''
        });
    }

    render() {
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
                                        passwrd: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.state.loggedin(this.state)}>
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
        loginn : (data) => dispatch(tologin(data))
    };
}

const mapStateToProps =(redu)=> {

    return {
        loggedin : redu.userdata.tologin
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);