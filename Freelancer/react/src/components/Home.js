import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Projects from "./Projects";
import Profile from "./Profile";
import Post from "./Post";
import Message from "./Message";
import Allprojects from "./Allprojects";
import Welcome from "./Welcome";
import '../App.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { Carousel } from 'react-responsive-carousel';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import image from './freelancer.svg';
class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        email: '',
        message: '',
        username: '',
        message1:''
    };

    handleSubmit = (userdata) => {
console.log("handle submit--->",userdata)
        console.log("usernameeee--->",userdata.username)
        API.doLogin(userdata)
            .then((status) => {
                if (status.status === 201) {
                    this.setState({

                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    handleSubmit1 = (userdata) => {
        console.log("handle submit1--->",userdata)
        API.doSignup(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({

                        isLoggedIn: true,
                        message1: "user registered",
                        username: userdata.username
                    });
                    alert(this.state.message1)
                    this.props.history.push("/login");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message1: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    render() {
        return (


            <div className="container-fluid">
                <Route exact path="/" render={() => (
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
                                <NavItem eventKey={1} componentClass={Link} href="/signup" to="/signup">
                                    Sign up
                                </NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="/about" to="/login">
                                    Login
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>


                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username}/>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                    <Signup handleSubmit1={this.handleSubmit1}/>
                    <Message message={this.state.message1}/>
                    </div>
                )}/>



                <Route exact path="/Projects" render={() => (
                    <Projects username={this.state.username}/>
                )}/>

                <Route exact path="/post" render={() => (
                    <Post username={this.state.username}/>
                )}/>

                <Route exact path="/profile" render={() => (
                    <Profile username={this.state.username}/>
                )}/>

                <Route exact path="/Allprojects" render={() => (
                    <Allprojects username={this.state.username}/>
                )}/>




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
export default connect(mapStateToProps, mapDispatchToProps)(NewerHomePage);