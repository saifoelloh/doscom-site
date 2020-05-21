import React from "react"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { useLocation, Link as RouteLink } from "react-router-dom"

const DashboardBeadcrumb = () => {
  const location = useLocation()
  const paths = location.pathname
    .split("/")
    .filter((x, id) => id !== 0 && x !== "")
  return (
    <Breadcrumb tag="nav" listTag="div">
      {paths.map((path, id) => {
        const isActive = id === paths.length - 1
        const url =
          id === 0 ? `/${path}/` : `/${paths.splice(0, id).join("/")}/${path}`
        return (
          <BreadcrumbItem key={id} tag={RouteLink} to={url} active={isActive}>
            {path}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export default DashboardBeadcrumb
