import React, { Component } from 'react'
import Countup from '../Countup/Countup'
import css from './TimerAux.css'

class TimerAux extends Component {

    render() {
        return (
            <div>
                <Countup {...this.props} className="timer-aux" />
                <h4 className="timer-aux-description">Time elapsed</h4>
            </div>
        )
    }
}

export default TimerAux
