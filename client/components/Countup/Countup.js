import React, { Component } from 'react'

class Countup extends Component {
    constructor(props) {
        super(props)
        this.state = {secondsElapsed: 0}
    }

    tick() {
        this.setState((prevState) => ({
          secondsElapsed: prevState.secondsElapsed + 1
        }))

        if (this.state.secondsElapsed <= 0) {
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.setState({secondsRemaining: this.props.secondsElapsed})
        // this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <h2 className={this.props.className}>{this.state.secondsElapsed}</h2>
        )
    }
}

export default Countup
