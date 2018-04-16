import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, handle } from 'react-bootstrap';
import image from './freelancer.svg';
import Projectsdashboard from "./Projectsdashboard";

class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    };

    state = {
        username : ''
    };

    componentWillMount(){
        this.setState({
            username : this.props.username
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }


    render(){
        return(
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
                        <NavItem eventKey={1} componentClass={Link} href="Allprojects/" to="/Allprojects">
                            Search Projects
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
              <Projectsdashboard/>

            </div>


            </div>

        )
    }
}

export default withRouter(Welcome);