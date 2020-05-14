import React from "react"
import { useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap"

import DashboardRoutes from "../../../routes/dashboard.js"
import { Link as RouteLink } from "react-router-dom"

const DashboardLayout = () => {
  const location = useLocation()
  const paths = location.pathname.split("/")
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
      <Col xs={12} md={2} className="h-100 bg-info p-0">
        <Card className="h-100 border-0">
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
      <Col xs={12} md={10}>
        <Breadcrumb tag="nav" listTag="div">
          {paths.map((path, id) => {
            const url =
              id === 0
                ? `/${path}/`
                : `/${paths.splice(0, id).join("/")}/${path}`
            return location.pathname === url ? (
              <BreadcrumbItem key={id} active>
                {`${path} | ${paths.length}`}
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={id} tag={RouteLink} to={url}>
                {path}
              </BreadcrumbItem>
            )
          })}
        </Breadcrumb>
        <DashboardRoutes />
      </Col>
    </Row>
  )
}

export default DashboardLayout
