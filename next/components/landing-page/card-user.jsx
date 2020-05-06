import { Avatar, Grid, Typography, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}))

const CardUser = ({ user }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar
          variant="rounded"
          alt={user.name}
          src={user.photo}
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user.title}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default React.memo(CardUser)
