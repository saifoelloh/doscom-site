import React, { createContext, useReducer } from "react"
import { BrowserRouter } from "react-router-dom"

import { MainRoutes } from "./routes"

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
        <MainRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
