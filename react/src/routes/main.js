import React from "react"
import { Route, Switch } from "react-router-dom"

import { NotFound } from "../pages/error"
import { LandingPage } from "../pages/landing-page"
import { Login } from "../pages/auth"

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/auth/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default MainRoutes
