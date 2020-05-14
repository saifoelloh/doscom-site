import React from "react"
import { Switch, useRouteMatch } from "react-router-dom"

import { Dashboard } from "../pages/dashboard"
import PrivateRoute from "../pages/auth/components/private-route.js"

const DashboardRoutes = () => {
  const { path } = useRouteMatch()
  const routes = [
    {
      path: `${path}/`,
      component: Dashboard,
      exact: true,
    },
    {
      path: `${path}/user`,
      component: () => <h1>user</h1>,
      exact: true,
    },
    {
      path: `${path}/post`,
      component: () => <h1>post</h1>,
      exact: true,
    },
  ]
  return (
    <Switch>
      {routes.map((route, id) => (
        <PrivateRoute
          key={id}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  )
}

export default DashboardRoutes
