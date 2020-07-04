import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { useLocation, Link as RouteLink } from 'react-router-dom'

const DashboardBeadcrumb = () => {
  const location = useLocation()
  const paths = location.pathname
    .split('/')
    .filter((x = '', id = 0) => id !== 0 && x !== '')

  return (
    <Breadcrumb tag="nav" listTag="div">
      {paths.map((path = '', id = -1) => {
        const isActive = id === paths.length - 1
        const url =
          id === 0 ? `/${path}/` : `/${paths.splice(0, id).join('/')}/${path}`
        return isActive ? (
          <BreadcrumbItem key={id} active={isActive}>
            {path}
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={id} tag={RouteLink} to={url}>
            {path}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export default DashboardBeadcrumb
