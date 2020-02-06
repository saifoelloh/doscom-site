import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import Link from 'next/link'

import MainHeader from './components/headers'

const useStyles = makeStyles(theme => ({
  hero: {
    height: '100vh',
  },
  heroButton: {
    marginTop: '2.5rem',
  },
}))

const Index = () => {
  const classes = useStyles()
  return (
    <fragment>
      <MainHeader />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.hero}>
        <Grid item>
          <Container maxWidth="md">
            <Typography variant="h3" align="center">
              Mari belajar, berbagi, dan berkontribusi
              <br />
              tentang dunia open source
            </Typography>
            <Typography variant="subtitle1" align="center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </Typography>
            <Typography align="center" className={classes.heroButton}>
              <Link href="about">
                <Button variant="outlined" color="primary">
                  Siapakah kami ?
                </Button>
              </Link>
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4">Kami adalah doscom.</Typography>
          </Grid>
        </Grid>
      </Container>
    </fragment>
  )
}

export default Index
