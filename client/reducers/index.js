import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import plan from './plan'
import options from './options'
import home from './home'

const rootReducer = combineReducers(
    {
        plan,
        options,
        home,
        routing: routerReducer
    }
)

export default rootReducer
