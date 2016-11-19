import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'

import plan from './data/plan'
import options from './data/options'
import home from './data/home'

const defaultState = {
    plan,
    options,
    home
}

const store = createStore(rootReducer, defaultState)
// const store = createStore(rootReducer, defaultState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
const history = syncHistoryWithStore(browserHistory, store)

export default store
