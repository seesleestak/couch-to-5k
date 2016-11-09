import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import plan from './plan'
import options from './options'

const rootReducer = combineReducers({plan, options, routing: routerReducer})

export default rootReducer
