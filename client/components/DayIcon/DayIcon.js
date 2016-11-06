import React, { Component } from 'react'
import css from './DayIcon.css'

class DayIcon extends Component {
    render() {
        return (
            <div className="circle">
                <div className="text-container">
                    <div>WEEK 1</div>
                    <div>DAY 1</div>
                </div>
            </div>
        )
    }
}

export default DayIcon
