import React, { Component } from 'react'
import css from './Options.css'

class Options extends Component {
    render() {
        return (
            <div>
                <h3>Options</h3>
                <div className="switch">
                    <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                        <h5>Option 1</h5>
                    </label>
                </div>
                <div className="switch">
                    <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                        <h5>Option 2</h5>
                    </label>
                </div>
                <div className="switch">
                    <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                        <h5>Option 3</h5>
                    </label>
                </div>
            </div>
        )
    }
}

export default Options
