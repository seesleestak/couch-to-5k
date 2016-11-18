import React, { Component } from 'react'
import css from './DayIcon.css'
import { Link } from 'react-router'

class DayIcon extends Component {
    render() {
        return (
            <div className="dayicon-container">
                <Link to={`d${this.props.plan[this.props.i].day}w${this.props.plan[this.props.i].week}`}>
                    <div onClick={this.props.setActive.bind(null, this.props.i)} className={this.props.plan[this.props.i].isActive ? "circle-active" : "circle-inactive"}>
                        <div className="text-container">
                            <div>WEEK {this.props.plan[this.props.i].week}</div>
                            <div>DAY {this.props.plan[this.props.i].day}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default DayIcon
