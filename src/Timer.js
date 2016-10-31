import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsed: 0,
            timeState: 'elapsed'
        };
    }

    tick() {
        this.setState((prevState) => ({
            elapsed: prevState.elapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div className="Timer-field">
                <h2 className="Time">{this.state.elapsed}</h2>
                <h5 className="Description">Time {this.state.timeState}</h5>
            </div>
        );
    }
}

export default Timer;
