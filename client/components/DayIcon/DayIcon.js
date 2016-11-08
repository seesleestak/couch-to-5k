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
                <div className="col s2 m2">
                    <div className="circle-inactive">
                        <div className="text-container-inactive">
                            <div>WEEK 1</div>
                            <div>DAY 2</div>
                        </div>
                    </div>
                </div>
                <div className="col s2 m2">
                    <div className="circle-inactive">
                        <div className="text-container-inactive">
                            <div>WEEK 1</div>
                            <div>DAY 3</div>
                        </div>
                    </div>
                </div>
                <div className="col s2 m2">
                    <div className="circle-inactive">
                        <div className="text-container-inactive">
                            <div>WEEK 2</div>
                            <div>DAY 1</div>
                        </div>
                    </div>
                </div>
                <div className="col s2 m2">
                    <div className="circle-inactive">
                        <div className="text-container-inactive">
                            <div>WEEK 2</div>
                            <div>DAY 2</div>
                        </div>
                    </div>
                </div>
                <div className="col s2 m2">
                    <div className="circle-inactive">
                        <div className="text-container-inactive">
                            <div>WEEK 2</div>
                            <div>DAY 3</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayIcon
