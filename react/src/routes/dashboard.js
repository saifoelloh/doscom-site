import React from "react"
import { Switch, useRouteMatch } from "react-router-dom"

import Dashboard from "./dashboard.js"
import PrivateRoute from "../pages/auth/components/private-route.js"

const DashboardRoutes = () => {
  const { path, url } = useRouteMatch()
  return (
    <Switch>
      <PrivateRoute exact path={`${path}/`} component={Dashboard} />
    </Switch>
  )
}

export default DashboardRoutes
