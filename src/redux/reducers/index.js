import {combineReducers} from 'redux'

import sessionReducer from './sesionReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
})

export default rootReducer