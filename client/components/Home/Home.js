import React, { Component } from 'react'
import css from './Home.css'
import TimerMain from '../TimerMain/TimerMain'
import DayIcon from '../DayIcon/DayIcon'

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
                <div className="waves-effect waves-light btn">
                    <i className="material-icons">play_circle_outline</i>
                    <div className="btn-text">Start</div>
                </div>

                <DayIcon />
            </div>
        )
    }
}

export default Home
