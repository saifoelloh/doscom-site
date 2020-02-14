import { Button, Container, Grid, Typography } from '@material-ui/core'
import { MonetizationOn, Person } from '@material-ui/icons'
import React from 'react'

const CardEvent = ({ event }) => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-end"
          style={{
            backgroundColor: 'lightpink',
            borderRadius: 5,
            padding: '.5rem',
          }}
          xs={12}
          md={4}>
          <Typography variant="subtitle1">
            {new Intl.DateTimeFormat('en-GB').format(event.date)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: '2rem' }}>
          <Grid container direction="column" justify="space-evenly" spacing={5}>
            <Grid item>
              <Typography variant="h5">{event.name}</Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify">
                {event.desc}
              </Typography>
            </Grid>
            <Grid item container justify="flex-end" alignItems="center">
              <Grid item xs={5}>
                <Button variant="contained" color="primary">
                  Selengkapnya
                </Button>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                xs={7}>
                <Grid item>
                  <Button
                    variant="text"
                    size="large"
                    disabled
                    startIcon={<Person />}>
                    {event.capacity}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="text"
                    size="large"
                    disabled
                    startIcon={<MonetizationOn />}>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(event.htm)}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardEvent
