import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Flag } from '@material-ui/icons'
import Link from 'next/link'
import React from 'react'

const menu = [
  {
    name: 'Main',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
]

const useStyles = makeStyles(theme => ({
  navbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    flexGrow: 1,
  },
  menuButtons: {
    marginRight: theme.spacing(2),
  },
}))

const MainHeader = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography className={classes.logo}>
          <img src="img/logo-mini-doscom.png" width="100" alt="" />
        </Typography>
        {menu.map(datum => (
          <Link href={datum.url}>
            <Typography
              variant="h6"
              color="textPrimary"
              className={classes.menuButtons}>
              {datum.name}
            </Typography>
          </Link>
        ))}
        <IconButton>
          <Flag />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader
