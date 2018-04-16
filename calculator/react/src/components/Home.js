import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Calculate from "./Calculate";
import Message from "./Message";
import Welcome from "./Welcome";

class NewerHomePage extends Component {

    state = {
        message: 'Result',
    };

    addhandle = (userdata) => {
        API.toadd(userdata)
            .then((response) => {
                //let msg = JSON.stringify(response.message);
                this.setState({message:response.message});
                console.log(response)
            });
    };

    subhandle = (userdata) => {
        API.tosub(userdata)
            .then((response) => {
                //let msg = JSON.stringify(response.message);
                this.setState({message:response.message});
                console.log(response)
            });
    };

    mulhandle = (userdata) => {
        API.tomul(userdata)
            .then((response) => {
                //let msg = JSON.stringify(response.message);
                this.setState({message:response.message});
                console.log(response)
            });
    };

    divhandle = (userdata) => {
        API.todiv(userdata)
            .then((response) => {
                //let msg = JSON.stringify(response.message);
                this.setState({message:response.message});
                console.log(response)
            });
    };

    render() {
        return (
            <div className="container-fluid">

                <Route exact path="/" render={() => (
                    <div>
                        <Calculate addhandle={this.addhandle}
                                    subhandle={this.subhandle}
                                    mulhandle={this.mulhandle}
                                    divhandle={this.divhandle}
                        />
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.message}/>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);