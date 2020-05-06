import { FETCING_DATA, DATA_FETCHED } from "../action-types"

const initialState = {
  fetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCING_DATA:
      return {
        ...state,
        fetching: true,
      }
    case DATA_FETCHED:
      return {
        ...state,
        fetching: false,
      }
    default:
      return state
  }
}
