import React from "react"
import { Route, Switch } from "react-router-dom"

import { LandingPage } from "./pages/landing-page"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  )
}

export default Routes
