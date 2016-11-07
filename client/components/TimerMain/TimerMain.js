import React, { Component } from 'react'
import css from './TimerMain.css'

class TimerMain extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsRemaining: 10
        }
    }
    getInitialState() {
        return {
            secondsRemaining: 10
        };
    }

    tick() {
        this.setState({secondsRemaining: this.state.secondsRemaining - 1})
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval)
        }
    }

    componentDidMount() {
        this.setState({secondsRemaining: this.state.secondsRemaining})
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h2>{this.state.secondsRemaining}</h2>
                <h4>Time elapsed</h4>
            </div>
        )
    }
}

export default TimerMain
