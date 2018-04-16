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

                <div><h3><b>Projects Bid</b></h3></div>
                <div className="table-responsive">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>PProjects</th>
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

                <div><h3><b>Posted Projects</b></h3></div>
                <div className="table-responsive">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>PProjects</th>
                            <th> Freelancer</th>
                            <th>Total Bids</th>
                            <th>Average Bid</th>
                            <th> Estimate Project completion</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Business Website</td>
                            <td> Kiran rao</td>
                            <td>35</td>
                            <td>824$</td>
                            <td>2 months</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            <td> Sportsbook software</td>
                            <td>Thomas</td>
                            <td>78</td>
                            <td>325$</td>
                            <td>1 month</td>
                            <td>open</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(Projectsdashboard);