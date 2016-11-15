import React, { Component } from 'react'
import DayIcon from '../DayIcon/DayIcon'

class DayIconGrid extends Component {
    render(props) {
        return(
            <div className="dayicon-grid">
                {this.props.plan.map((dayId, i) => <DayIcon {...this.props} key={i} i={i}/>)}
            </div>
        )
    }
}
// <div className="col s2 m2"></div>
export default DayIconGrid
