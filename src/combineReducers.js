import { combineReducers } from 'redux'
import { changeNumberReducer,resultReducer } from './reducers'


export default combineReducers({
    currentNumber: changeNumberReducer,
    finalResult:resultReducer
})