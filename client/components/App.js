import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreator'
import Main from './Main'

function mapStateToProps(state) {
    return {
        plan: state.plan,
        options: state.options
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
