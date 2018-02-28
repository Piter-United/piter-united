import { combineReducers } from 'redux'

import events from './events'
import user from './user'

const reducer = combineReducers({
  events,
  user,
})

export default reducer
