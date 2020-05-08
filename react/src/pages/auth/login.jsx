import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
} from "reactstrap"

import { useForm } from "../../helper/hooks"
import { AuthLayout } from "./components"

const Login = () => {
  const user = useForm({})

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AuthLayout>
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
    </AuthLayout>
  )
}

export default Login
