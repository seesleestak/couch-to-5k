import React, { Component } from 'react';
import './Timer.css';
import './Button';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secElapsed: 0,
            minElapsed: 0,
            timeState: 'elapsed',
        };
    }

    tick() {
        while (this.state.secElapsed < 60) {
            this.setState((prevState) => ({
                secElapsed: prevState.secElapsed + 1
            }));
        }

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
                <h2 className="Time">{this.state.minElapsed}:{this.state.secElapsed}</h2>
                <h5 className="Description">Time {this.state.timeState}</h5>
            </div>
        );
    }
}

export default Timer;
