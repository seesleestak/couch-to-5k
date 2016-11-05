import { createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import {browserHistory } from 'react-router'
import rootReducer from './reducers/index'
