import { combineReducers } from "redux"

import user from "./user/reducer"
import fetch from "./fetch/reducer"

export default combineReducers({
  user,
  fetch,
})
