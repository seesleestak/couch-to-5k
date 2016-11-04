import React, { Component } from 'react'
import { Link } from 'react-router'
import css from './Header.css'

class Header extends Component {
    render() {
        return(
            <div>
                <div className="cyan darken-4">
                    <Link to="/options/"><i className="settings-btn material-icons">settings</i></Link>
                    <Link to="/"><h1 className="heading-text center-align">Couch to {5}k</h1></Link>
                </div>
                <div className="teal lighten-2"></div>
            </div>
        )
    }
}

export default Header
