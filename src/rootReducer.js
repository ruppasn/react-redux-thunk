import {combineReducers} from 'redux'
import openMapReducer from './openMap/openMapReducer'

export default combineReducers({
    map: openMapReducer
})