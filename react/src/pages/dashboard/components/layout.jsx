import React from "react"
import { useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap"

import DashboardRoutes from "../../../routes/dashboard.js"
import DashboardHeader from "./header.jsx"
import { Link as RouteLink } from "react-router-dom"

const DashboardLayout = () => {
  const location = useLocation()
  const paths = location.pathname
    .split("/")
    .filter((x, id) => id !== 0 && x !== "")
  const menus = [
    {
      title: "Dashboard",
      url: "/dashboard/",
    },
    {
      title: "User",
      url: "/dashboard/user",
    },
    {
      title: "Post",
      url: "/dashboard/post",
    },
  ]

  return (
    <Row className="mx-0 h-100 align-items-stretch">
      <Col xs={12} md={2} className="h-100 p-0">
        <Card className="h-100 border-0 bg-info">
          <ListGroup>
            {menus.map((menu, id) => (
              <ListGroupItem
                key={id}
                tag={RouteLink}
                to={menu.url}
                active={location.pathname === menu.url}
                action
              >
                {menu.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </Col>
      <Col xs={12} md={10} className="h-100 p-0">
        <DashboardHeader />
        <Container fluid className="py-3">
          <Breadcrumb tag="nav" listTag="div">
            {paths.map((path, id) => {
              const isActive = id === paths.length - 1
              const url =
                id === 0
                  ? `/${path}/`
                  : `/${paths.splice(0, id).join("/")}/${path}`
              return (
                <BreadcrumbItem
                  key={id}
                  tag={RouteLink}
                  to={url}
                  active={isActive}
                >
                  {path}
                </BreadcrumbItem>
              )
            })}
          </Breadcrumb>
          <DashboardRoutes />
        </Container>
      </Col>
    </Row>
  )
}

export default DashboardLayout
