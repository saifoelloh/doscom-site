import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const CardEvent = () => {
  return (
    <Grid
      container
      direction="row"
      style={{
        backgroundColor: 'lightgray',
        borderRadius: 5,
      }}>
      <Grid
        item
        style={{ backgroundColor: 'lightpink', borderRadius: 5 }}
        xs={4}>
        <Typography variant="subtitle1">20-11-2020</Typography>
      </Grid>
      <Grid item xs={8}>
        <Container>
          <Typography variant="h5">Hello</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item xs={5}>
              <Button variant="contained" color="primary">
                Selengkapnya
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Typography>10</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}

export default CardEvent
