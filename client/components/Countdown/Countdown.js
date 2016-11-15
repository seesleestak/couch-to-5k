import React, { Component } from 'react'

class Countdown extends Component {
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
        // this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <h2 className={this.props.className}>{this.state.secondsRemaining}</h2>
        )
    }
}

export default Countdown
