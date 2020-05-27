import PropsTypes from 'prop-types'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const AuthLayout = ({ children = PropsTypes.node }) => (
  <Container className="h-100">
    <Row className="h-100 justify-content-center align-items-center">
      <Col xs={12} md={7}>
        {children}
      </Col>
    </Row>
  </Container>
)

AuthLayout.propTypes = {
  children: PropsTypes.node.isRequired,
}

export default AuthLayout
