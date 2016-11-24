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
        this.setState({secondsRemaining: this.props.secondsInput})
        // if (this.props.isPlay) {
        this.interval = setInterval(() => this.tick(), 1000)
        // }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let minutes = Math.floor(this.state.secondsRemaining / 60);
        let seconds = this.state.secondsRemaining - minutes * 60;
        let output = "";

        output += "" + minutes + ":" + (seconds < 10 ? "0" : "");
        output += "" + seconds;

        return (
            <h2 className={this.props.className}>{output}</h2>
        )
    }
}

export default Countdown
