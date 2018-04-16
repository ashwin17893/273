import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Projects from "./Projects";

class Calculate extends Component {

    static propTypes = {
        addhandle: PropTypes.func.isRequired,
        subhandle: PropTypes.func.isRequired,
        mulhandle: PropTypes.func.isRequired,
        divhandle: PropTypes.func.isRequired
    };

    state = {
        value1: '',
        value2: ''
    };

    componentWillMount(){
        this.setState({
            value1: '',
            value2: ''
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
                            <h1>Calculator</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                label="value1"
                                placeholder="Enter value1"
                                value={this.state.value1}
                                onChange={(event) => {
                                    this.setState({
                                        value1: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                label="value2"
                                placeholder="Enter value2"
                                value={this.state.value2}
                                onChange={(event) => {
                                    this.setState({
                                        value2: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">



                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.addhandle(this.state)}>
                                ADD
                            </button>
                        </div>

                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.subhandle(this.state)}>
                                SUB
                            </button>
                        </div>

                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.mulhandle(this.state)}>
                                MULT
                            </button>
                        </div>

                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.divhandle(this.state)}>
                                DIVI
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Calculate;