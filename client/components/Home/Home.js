import React, { Component } from 'react'
import css from './Home.css'
import TimerMain from '../TimerMain/TimerMain'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home page</h3>
                <TimerMain />
                <div className="waves-effect waves-light btn">
                    <i className="material-icons">play_circle_outline</i>
                </div>
            </div>
        )
    }
}

export default Home
