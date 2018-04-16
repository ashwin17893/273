import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Allprojects extends Component {
    state = {
        isLoggedIn: false,
        message: '',
        Projlist: []
    };


    render() {
        return (
            <div className="row justify-content-md-center">
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
                            <NavItem eventKey={1} href="#">
                                Post a Project
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="table-responsive">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Projects</th>
                            <th> Employer</th>
                            <th>Average Bid</th>
                            <th> Bid End Date</th>
                            <th>Bid Status</th>
                            <th>Bid</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Need CSS expert for splash animation</td>
                            <td> Mark taylor</td>
                            <td>824$</td>
                            <td>4/10/2018</td>
                            <td>Open</td>
                            <td><button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Bid
                            </button></td>
                        </tr>
                        <tr>
                            <td> Build a website for memes</td>
                            <td>Ashwin</td>
                            <td>300$</td>
                            <td>4/23/2018</td>
                            <td>open</td>
                            <td><button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Bid
                            </button></td>
                        </tr>

                        </tbody>
                    </Table>;


                </div>
            </div>
        );
    }
}

export default Allprojects;