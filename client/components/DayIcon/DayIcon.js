import React, { Component } from 'react'
import css from './DayIcon.css'
import { Link } from 'react-router'

class DayIcon extends Component {
    render() {
        return (
            <div className="dayicon-container">
                <div onClick={this.props.setActive.bind(null, this.props)} className={this.props.plan[this.props.i].isActive ? "circle circle-active" : "circle circle-inactive"}>
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
