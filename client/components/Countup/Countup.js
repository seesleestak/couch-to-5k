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

        if (this.state.secondsElapsed >= this.props.secondsInput) {
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.setState({secondsElapsed: this.state.secondsElapsed})
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let minutes = Math.floor(this.state.secondsElapsed / 60);
        let seconds = this.state.secondsElapsed - minutes * 60;
        let output = "";

        output += "" + minutes + ":" + (seconds < 10 ? "0" : "");
        output += "" + seconds;

        return (
            <h2 className={this.props.className}>{output}</h2>
        )
    }
}

export default Countup
