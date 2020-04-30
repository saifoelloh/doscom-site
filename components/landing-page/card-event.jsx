import { Button, Container, Grid, Typography } from "@material-ui/core"
import { faDollarSign, faUsers } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardEvent = (props) => {
  return (
    <Grid container style={{ backgroundColor: "grey" }} mb="3rem">
      <Grid item alignItems="flex-end" xs={12} md={4}>
        <Typography>
          {new Intl.DateTimeFormat("en-GB").format(Date.now())}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Container p="5">
          <Typography>Release Party</Typography>
          <hr width="150" />
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
          <Grid container justify="space-between">
            <Grid item xs={12} md={6}>
              <Button variant="contained" color="primary">
                Selengkapnya
              </Button>
            </Grid>
            <Grid item container alignItems="flex-end" xs={12} md={6}>
              <Button startIcon={<FontAwesomeIcon icon={faUsers} />} disabled>
                25 Orang
              </Button>
              <Button
                startIcon={<FontAwesomeIcon icon={faDollarSign} />}
                disabled
              >
                Berbayar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}

export default CardEvent
