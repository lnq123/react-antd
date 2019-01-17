import { combineReducers } from 'redux'

import { userData } from './user.reducer'

const rootReducer = combineReducers({
  userData,
})

export default rootReducer
