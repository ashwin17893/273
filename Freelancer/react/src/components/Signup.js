import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Projects from "./Projects";

class Signup extends Component {

    static propTypes = {
        handleSubmit1: PropTypes.func.isRequired
    };

    state = {
        email: '',
        username: '',
        passwrd: ''
    };

    componentWillMount(){
        this.setState({
            email:'',
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
                            <h1>Signup</h1>
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
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
                                onClick={() => this.props.handleSubmit1(this.state)}>
                                Signup
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
        signup : (data) => dispatch(tologin(data))
    };
}

const mapStateToProps =(redu)=> {

    return {
        loggedin : redu.userdata.tosignup
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);