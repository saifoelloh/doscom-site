import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"

import { AuthContext } from "../../../auth-context"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth] = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
