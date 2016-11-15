import React, { Component } from 'react'
import css from './DayIcon.css'

class DayIcon extends Component {
    render() {
        return (
            <div className="dayicon-container">
                <div className={this.props.plan[this.props.i].isActive ? "circle-active" : "circle-inactive"}>
                    <div className="text-container">
                        <div>WEEK {this.props.plan[this.props.i].week}</div>
                        <div>DAY {this.props.plan[this.props.i].day}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayIcon
