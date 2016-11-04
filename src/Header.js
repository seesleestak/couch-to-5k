import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="cyan darken-4">
                    <i id="settings-btn" className="material-icons">settings</i>
                    <h1>Couch to {5}k</h1>
                </div>
                <div className="teal lighten-2"></div>
            </div>
        )
    }
}

export default Header
