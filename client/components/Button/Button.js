import React, { Component } from 'react'

class Button extends Component {
    render () {
        return (
            <div className="waves-effect waves-light btn">
                <i className="material-icons">play_circle_outline</i>
                <div className="btn-text">Start</div>
            </div>
        )
    }
}

export default Button
