import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import '../App.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import image from './freelancer.svg';
import {connect} from "react-redux";
import {actionlogin} from "../actions/loginactions";
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    NavLink,
} from 'reactstrap';

import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
const items = [

    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-nasa-3-78af6535.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-app-1-374cf36f.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://www.f-cdn.com/assets/css/images/homepage/2x-website-4-d8912531.jpg',
        altText: '',
        caption: ''
    }
];

class NewerHomePage extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.state = {
            isOpen: false,
            activeIndex: 0
        };
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    handleSubmit = (userdata) => {
console.log("handle submit--->",userdata)
        API.doLogin(userdata)
            .then((status) => {
                if (status === 200) {
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

    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{height:"600px",width:"1350px"}}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
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
                                <NavItem eventKey={2} componentClass={Link} href="/about" to="/signup">
                                    Sign up
                                </NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="/about" to="/login">
                                    Login
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )}/>

                <div>

                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>


                </div>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login/>
                        console.log("done with login");


                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username}/>
                )}/>


            </div>

        );
    }
}




export default withRouter(NewerHomePage);