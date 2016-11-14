import React, { Component } from 'react'
import css from './Home.css'

// Import components
import TimerMain from '../TimerMain/TimerMain'
import TimerAux from '../TimerAux/TimerAux'
import DayIcon from '../DayIcon/DayIcon'
import Button from '../Button/Button.js'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <TimerMain secondsRemaining="10" />
                    </div>
                </div>
                <div className="row">
                    <div className="col m6 s12">
                        <TimerAux secondsRemaining="10" />
                    </div>
                    <div className="col m6 s12">
                        <TimerAux secondsRemaining="10" />
                    </div>
                </div>

                <Button />

                <DayIcon />
            </div>
        )
    }
}

export default Home
