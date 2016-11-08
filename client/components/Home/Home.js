import React, { Component } from 'react'
import css from './Home.css'

// Import components
import TimerMain from '../TimerMain/TimerMain'
import DayIcon from '../DayIcon/DayIcon'
import Button from '../Button/Button.js'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <TimerMain />
                    </div>
                    <div className="col s12 m4">
                        <TimerMain />
                    </div>
                    <div className="col s12 m4">
                        <TimerMain />
                    </div>
                </div>
                <Button />

                <DayIcon />
            </div>
        )
    }
}

export default Home
