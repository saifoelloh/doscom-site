import { ADD_USER } from "../action-types"

const initialState = {
  username: "",
  email: "",
  password: "",
  role: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload,
      }
    case REMOVE_USER:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
