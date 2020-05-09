import React from "react"
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap"

import DashboardRoutes from "../../../routes/dashboard.js"
import { Link as RouteLink } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <ListGroup>
            <ListGroupItem tag={RouteLink} href="/dashboard" action>
              Dashboard
            </ListGroupItem>
            <ListGroupItem tag={RouteLink} href="/user" action>
              User
            </ListGroupItem>
            <ListGroupItem tag={RouteLink} href="/post" action>
              Posts
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={12} md={8}>
          <DashboardRoutes />
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardLayout
