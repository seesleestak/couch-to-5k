import React, { Component } from 'react'
import css from './TimerAux.css'

class TimerAux extends Component {
    constructor(props) {
        super(props)
        this.state = {secondsRemaining: 0}
    }

    tick() {
        this.setState((prevState) => ({
          secondsRemaining: prevState.secondsRemaining - 1
        }))

        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.setState({secondsRemaining: this.props.secondsRemaining})
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h2 className="timer-aux">{this.state.secondsRemaining}</h2>
                <h4 className="timer-aux-description">Time elapsed</h4>
            </div>
        )
    }
}

export default TimerAux
