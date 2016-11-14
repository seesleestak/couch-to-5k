import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'

import plan from './data/plan'
import options from './data/options'

const defaultState = {
    plan,
    options
}

const store = createStore(rootReducer, defaultState)
const history = syncHistoryWithStore(browserHistory, store)

export default store
