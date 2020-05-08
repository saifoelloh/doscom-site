import React from "react"
import { Col, Container, Row } from "reactstrap"

const AuthLayout = ({ children }) => {
  return (
    <Container className="h-100">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={7}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default AuthLayout
