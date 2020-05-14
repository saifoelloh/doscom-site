import React from "react"
import { Route, Switch } from "react-router-dom"

import { Login } from "../pages/auth"
import { PrivateRoute } from "../pages/auth/components"
import { NotFound } from "../pages/error"
import { LandingPage } from "../pages/landing-page"
import { DashboardLayout } from "../pages/dashboard/components"

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/auth/login" component={Login} />
      <PrivateRoute path="/dashboard" component={DashboardLayout} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default MainRoutes
