import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'

import { AuthContext } from '../../auth-context'
import { AuthLayout } from './components'
import { useForm } from '../../helper/hooks'

const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const user = useForm({})
  const [loading, setLoading] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [auth, dispatch] = useContext(AuthContext)
  const { from } = location.state || { from: { pathname: '/dashboard/' } }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'LOGIN',
      payload: {
        username: user.value.username,
      },
    })
    history.replace(from)
  }

  const checkAuthenticate = () => {
    setLoading(true)
    if (auth.isAuthenticate) {
      history.replace(from)
    }
    setLoading(false)
  }

  useEffect(() => {
    checkAuthenticate()
  })

  return (
    <AuthLayout>
      {loading ? (
        'loading'
      ) : (
        <Card>
          <CardHeader>Login Form</CardHeader>
          <CardBody>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  required
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={user.changeHandler}
                />
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input
                    required
                    name="password"
                    type={isShow ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={user.changeHandler}
                  />
                  <InputGroupAddon addonType="append">
                    <Button onClick={() => setIsShow(!isShow)} outline>
                      @
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
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
