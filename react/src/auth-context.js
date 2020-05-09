import React, { createContext, useReducer } from "react"

const initialState = {
  username: "",
  isAuthenticate: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log({ message: "masuk" })
      return {
        ...state,
        ...action.payload,
        isAuthenticate: true,
      }
    default:
      return state
  }
}

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}
