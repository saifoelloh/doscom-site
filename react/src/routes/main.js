import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from '../pages/auth'
import { PrivateRoute } from '../pages/auth/components'
import { NotFound } from '../pages/error'
import { LandingPage } from '../pages/landing-page'
import { DashboardLayout } from '../pages/dashboard/components'

const MainRoutes = () => {
  const routes = [
    {
      path: '/',
      component: LandingPage,
      exact: true,
    },
    {
      path: '/auth/login',
      component: Login,
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      exact: true,
      private: true,
    },
  ]
  return (
    <Switch>
      {routes.map((route, index) =>
        route.private === undefined ? (
          <Route
            path={route.path}
            component={route.component}
            exact={route?.exact}
          />
        ) : (
          <PrivateRoute
            path={route.path}
            component={route.component}
            exact={route?.exact}
          />
        ),
      )}
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default MainRoutes
