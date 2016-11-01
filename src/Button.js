import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            isStart: true
        }
    }

    handleClick() {
        this.setState({
            isStart: !this.state.isStart,
        })
    }

    render() {
        return <div className="waves-effect waves-light btn" onClick={this.handleClick.bind(this)}>{this.state.isStart ? 'start' : 'stop'}</div>;
    }
}

export default Button;
