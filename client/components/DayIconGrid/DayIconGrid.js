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

export default DayIconGrid
