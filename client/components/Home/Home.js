import React, { Component } from 'react'
import css from './Home.css'

// Import components
import TimerMain from '../TimerMain/TimerMain'
import TimerAux from '../TimerAux/TimerAux'
import DayIconGrid from '../DayIconGrid/DayIconGrid'
import Button from '../Button/Button.js'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="description-heading">Description: </h4>
                    <h4>{this.props.plan[0].description}</h4>
                </div>
                <div className="row">
                    <div className="col s12">
                        <TimerMain secondsRemaining="10" />
                    </div>
                </div>
                <div className="row">
                    <div className="col m6 push-m5 s12">
                        <TimerAux secondsRemaining="5" />
                    </div>
                    <div className="col m6 pull-m5 s12">
                        <TimerAux secondsRemaining="5" />
                    </div>
                </div>

                <Button {...this.props}/>

                <DayIconGrid {...this.props}/>
            </div>
        )
    }
}

export default Home
