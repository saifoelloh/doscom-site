import React from "react"
import { Card, Col, Container, Row } from "reactstrap"

import DashboardBeadcrumb from "./breadcrumb.jsx"
import DashboardRoutes from "../../../routes/dashboard.js"
import DashboardHeader from "./header.jsx"
import DashboardSidebar from "./sidebar.jsx"

const DashboardLayout = () => {
  return (
    <Row className="mx-0 h-100 align-items-stretch">
      <Col xs={12} md={2} className="h-100 p-0">
        <Card className="h-100 border-0 bg-info">
          <DashboardSidebar />
        </Card>
      </Col>
      <Col xs={12} md={10} className="h-100 p-0">
        <DashboardHeader />
        <Container fluid className="py-3">
          <DashboardBeadcrumb />
          <DashboardRoutes />
        </Container>
      </Col>
    </Row>
  )
}

export default DashboardLayout
