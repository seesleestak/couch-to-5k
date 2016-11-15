import React, { Component } from 'react'
import Countdown from '../Countdown/Countdown'
import css from './TimerMain.css'

class TimerMain extends Component {
    // runState() {
    //     if(this.props.plan[i].secSegment[i] == this.props.plan[i].secSegment[i].length) {
    //
    //     }
    //     elseif() {
    //
    //     }
    //     elseif(this.props.i % 2 == 0) {
    //         let runStatus = 'Walk'
    //     }
    //     else {
    //         let runStatus = 'Run'
    //     }
    // }

    render() {
        return (
            <div>
                <Countdown {...this.props} className="timer-main" />
                <h4>Time elapsed</h4>
            </div>
        )
    }
}

export default TimerMain
