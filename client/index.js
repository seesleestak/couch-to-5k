import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Global styling
import css from './Core.css'

// Components
import Main from './components/Main'
import Home from './components/Home/Home'
import Options from './components/Options/Options'

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/options/" component={Options}></Route>
        </Route>
    </Router>
)

ReactDOM.render(
    router,
    document.getElementById('root')
)
