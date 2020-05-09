import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
} from "reactstrap"

import { AuthContext } from "../../auth-context"
import { AuthLayout } from "./components"
import { useForm } from "../../helper/hooks"

const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const user = useForm({})
  const [loading, setLoading] = useState(false)
  const [auth, dispatch] = useContext(AuthContext)
  const { from } = location.state || { from: { pathname: "/dashboard" } }
  console.log({ auth, dispatch })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch("LOGIN", {
      payload: {
        username: user.value["username"],
      },
    })
    history.replace(from)
  }

  useEffect(() => {
    setLoading(true)
    if (auth.isAuthenticate) {
      history.replace(from)
    }
    setLoading(false)
  }, [])

  return (
    <AuthLayout>
      {loading ? (
        "loading"
      ) : (
        <Card>
          <CardHeader>Login Form</CardHeader>
          <CardBody>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={user.changeHandler}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={user.changeHandler}
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary" block>
                  submit
                </Button>
              </FormGroup>
            </form>
          </CardBody>
        </Card>
      )}
    </AuthLayout>
  )
}

export default Login
