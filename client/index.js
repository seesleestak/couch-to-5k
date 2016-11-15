import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Materialize from 'materialize-css'

// Global styling
import css from './Core.css'

// Components
import App from './components/App'
import Home from './components/Home/Home'
import Options from './components/Options/Options'

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/options/" component={Options}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
)
