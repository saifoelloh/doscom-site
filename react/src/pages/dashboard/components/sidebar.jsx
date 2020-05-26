import {
  faFileAlt,
  faTachometerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useLocation, Link as RouteLink } from 'react-router-dom'

const MenuItem = (props) => {
  const location = useLocation()
  const { icon, title, url } = props
  return (
    <ListGroupItem
      tag={RouteLink}
      to={url}
      active={location.pathname === url}
      action
    >
      <FontAwesomeIcon icon={icon} style={{ margin: '0 .5rem' }} />
      {title}
    </ListGroupItem>
  )
}

const DashboardSidebar = () => {
  const menus = [
    {
      title: 'Dashboard',
      url: '/dashboard/',
      icon: faTachometerAlt,
    },
    {
      title: 'User',
      url: '/dashboard/user',
      icon: faUsers,
    },
    {
      title: 'Post',
      url: '/dashboard/post',
      icon: faFileAlt,
    },
  ]

  return (
    <ListGroup>
      {menus.map((menu, id) => (
        <MenuItem key={id} menu={menu} />
      ))}
    </ListGroup>
  )
}

export default DashboardSidebar
