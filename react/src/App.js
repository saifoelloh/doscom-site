import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./auth-context.js"
import { MainRoutes } from "./routes"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
