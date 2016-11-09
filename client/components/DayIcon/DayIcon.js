import React, { Component } from 'react'
import css from './DayIcon.css'

class DayIcon extends Component {
    render() {
        return (
            <div className="row dayicon-container">
                <div className="col s2 m2">
                    <div className="circle-active">
                        <div className="text-container-active">
                            <div>WEEK 1</div>
                            <div>DAY 1</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayIcon
