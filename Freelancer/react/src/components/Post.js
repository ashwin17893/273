import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, FieldGroup} from 'react-bootstrap';
import Projects from "./Projects";
import {Link} from "react-router-dom";
import image from './freelancer.svg';
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';

class Post extends Component {

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

                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>

                            <a href="#"><img src={image} weight="40" height="40"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>



                            <NavDropdown eventKey={3} title="Hire Freelancers" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={4} title="Find Work" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1}>Action</MenuItem>
                                <MenuItem eventKey={4.2}>Another action</MenuItem>
                                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.3}>Separated link</MenuItem>
                            </NavDropdown>

                            <NavItem eventKey={2} href="#">
                                How it Works
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/post" to="/post">
                                Post a Project
                            </NavItem>
                            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} componentClass={Link} href="/profile" to="/profile">Edit Profile</MenuItem>
                                <MenuItem eventKey={3.2} componentClass={Link} href="/about" to="/login">Logout</MenuItem>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Navbar Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <a componentClass={Link} href="/Projects" to="/Projects">My Projects</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <Navbar.Brand>
                                <a componentClass={Link} href="/welcome" to="/welcome">Dashboard</a>
                            </Navbar.Brand>


                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/Allprojects" to="/Allprojects">
                                Search Projects
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="col-md-4">
                </div>

                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Project details</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Project title"
                                placeholder="Enter Project title"
                                value={this.state.title}
                                onChange={(event) => {
                                    this.setState({
                                        title: event.target.value
                                    });
                                }}
                            />
                        </div>
                       <div>

                           <FormGroup controlId="formControlsTextarea">
                               <FormControl componentClass="textarea" placeholder="Description" />
                           </FormGroup>

                       </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="file"
                                label="File select"
                                placeholder="Select file"
                                value={this.state.fname}
                                onChange={(event) => {
                                    this.setState({
                                        fname: event.target.value
                                    });
                                }}
                            />
                        </div>


                        <FormGroup controlId="formControlsTextarea">
                            <FormControl componentClass="textarea" placeholder="Skills" />
                        </FormGroup>

                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Post
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
export default connect(mapStateToProps, mapDispatchToProps)(Post);