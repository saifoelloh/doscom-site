import { ADD_USER, REMOVE_USER } from "../action-types"

export const addUser = (content) => ({
  type: ADD_USER,
  payload: { ...content },
})

export const removeUser = () => ({
  type: REMOVE_USER,
})
