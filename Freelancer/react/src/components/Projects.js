import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';

class Projects extends Component {
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
                            <th>My Bid</th>
                            <th>Average Bid</th>
                            <th> Bid End Date</th>
                            <th>Bid Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Build a Hotel Website</td>
                            <td> John Hopkins</td>
                            <td>824$</td>
                            <td>987$</td>
                            <td>4/10/2018</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            <td> creating a frontend</td>
                            <td>Ashwin</td>
                            <td>300$</td>
                            <td>325$</td>
                            <td>4/23/2018</td>
                            <td>closed</td>
                        </tr>

                        </tbody>
                    </Table>;


                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        loginn : (data) => dispatch(actionlogin(data))
    };
}

const mapStateToProps =(stores)=> {

    return {
        loggedin : stores.stores.login
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);