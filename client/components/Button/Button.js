import React, { Component } from 'react'

class Button extends Component {
    render () {
        return (
            <div className="waves-effect waves-light btn">
                <i className="material-icons">{this.props.home.isPlay ? 'pause_circle_outline': 'play_circle_outline'}</i>
                <div className="btn-text">{this.props.home.isPlay ? 'pause': 'start'}</div>
            </div>
        )
    }
}

export default Button
