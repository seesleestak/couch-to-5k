import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            isStart: true,
            btnText: 'start'
        }
    }

    handleClick() {
        if(this.state.isStart){
            this.setState({
                isStart: !this.state.isStart,
                btnText: 'stop'
            })
        }
        else {
            this.setState({
                isStart: !this.state.isStart,
                btnText: 'start'
            })
        }

    }

    render() {
        return <div className="waves-effect waves-light btn" onClick={this.handleClick.bind(this)}>{this.state.btnText}</div>;
    }
}

export default Button;
