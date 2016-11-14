import React, { Component } from 'react'
import css from './TimerAux.css'

class TimerAux extends Component {
    // getInitialState() {
    //     return {
    //         secondsRemaining: 0
    //     };
    // }
    //
    // tick() {
    //     this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    //     if (this.state.secondsRemaining <= 0) {
    //         clearInterval(this.interval)
    //     }
    // }
    //
    // componentDidMount() {
    //     this.setState({secondsRemaining: this.props.secondsRemaining})
    //     this.interval = setInterval(this.tick, 1000)
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.interval)
    // }

    render() {
        return (
            <div>
                <h2 className="timer-aux">Timer</h2>
                <h4>Time elapsed</h4>
            </div>
        )
    }
}

export default TimerAux
