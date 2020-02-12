import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const CardProfile = ({ name, position, photo }) => (
  <Grid container alignItems="center" justify="flex-end" spacing={4}>
    <Grid item xs={4}>
      <img src={photo} height="150" alt="" />
    </Grid>
    <Grid item xs={8}>
      <Typography variant="h5" align="left">
        {name}
      </Typography>
      <Typography variant="h6" align="left">
        {position}
      </Typography>
    </Grid>
  </Grid>
)

export default CardProfile
