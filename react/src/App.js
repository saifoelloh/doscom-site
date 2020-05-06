import React, { createContext, useReducer } from "react"
import { BrowserRouter } from "react-router-dom"

import Routes from "./routes.js"

const initialState = {
  name: "",
  email: "",
  isAuthenticate: false,
}

const AuthContext = createContext()

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticate: true,
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
