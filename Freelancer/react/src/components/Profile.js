import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Projects from "./Projects";
import image from './Ashwin.jpg';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, handle, Image, Grid, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Profile extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        passwrd: ''
    };

    componentWillMount(){
        this.setState({
            username: 'ashwinkolurmath@gmail.com',
            passwrd: 'Full Stack web developer'
        });
    }

    render() {
        return (
            <div>



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
                            <NavItem eventKey={1} componentClass={Link} href="/post" to="/post">
                                Post a Project
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            <div>
                <div className="form-group">
                    <h1>Profile</h1>
                </div>
                <div class="col-sm-4"></div>

                <Grid>
                    <Col xs={8} md={4}>
                <Image src={image} thumbnail/>
                    </Col>

                </Grid>


            </div>
            <div>
            <h4><b>Email id:</b> {this.state.username}</h4>
            </div>
                <div>
                    <h4><b>Description:</b> {this.state.passwrd}</h4>
                </div>

                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => this.props.handleSubmit(this.state)}>
                    Edit Profile
                </button>
            </div>


        );
    }
}

export default Profile;