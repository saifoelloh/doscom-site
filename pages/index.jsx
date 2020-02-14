import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Code, Palette, WifiTethering } from '@material-ui/icons'
import Link from 'next/link'
import React from 'react'

import CardDivision from './components/CardDivision'
import CardGalery from './components/CardGalery'
import CardProfile from './components/CardProfile'
import CarouselEvent from './components/CarouselEvent'
import MainHeader from './components/headers'

const content = {
  id: {
    hero: {
      title: 'Mari belajar dan berbagi\ntentang dunia open source',
      subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      button: 'Siapakah kami ?',
    },
  },
}

const divisionIcon = {
  fontSize: 50,
  color: 'white',
}

const divisions = [
  {
    name: 'Programming',
    desc:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    icon: <Code style={divisionIcon} />,
    iconBackground: 'lightblue',
  },
  {
    name: 'Multimedia',
    desc:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    icon: <Palette style={divisionIcon} />,
    iconBackground: 'lightgreen',
  },
  {
    name: 'Jaringan',
    desc:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
    icon: <WifiTethering style={divisionIcon} />,
    iconBackground: 'lightpink',
  },
]

const events = [
  {
    name: 'Bootcamp',
    desc:
      'Ini adalah sebuah kegiatan dimana doscom akan mengadakan suatu event yang bernama doscom univercity atau DU.',
    date: Date.now().toString(),
    background: 'lightpink',
    capacity: 50,
    htm: 50000,
  },
  {
    name: 'Open Source On The School',
    desc:
      'Ini adalah sebuah kegiatan dimana doscom akan mengadakan suatu event yang bernama doscom univercity atau DU.',
    date: Date.now().toString(),
    background: 'lightpink',
    capacity: 75,
    htm: 0,
  },
  {
    name: 'Software Freedom Day',
    desc:
      'Ini adalah sebuah kegiatan dimana doscom akan mengadakan suatu event yang bernama doscom univercity atau DU.',
    date: Date.now().toString(),
    background: 'lightpink',
    capacity: 250,
    htm: 0,
  },
  {
    name: 'Doscom Univercity',
    desc:
      'Ini adalah sebuah kegiatan dimana doscom akan mengadakan suatu event yang bernama doscom univercity atau DU.',
    date: Date.now().toString(),
    background: 'lightpink',
    capacity: 125,
    htm: 50000,
  },
  {
    name: 'Release Party',
    desc:
      'Ini adalah sebuah kegiatan dimana doscom akan mengadakan suatu event yang bernama doscom univercity atau DU.',
    date: Date.now().toString(),
    background: 'lightpink',
    capacity: 100,
    htm: 75000,
  },
]

const lang = 'id'

const useStyles = makeStyles(theme => ({
  hv100: {
    minHeight: '100vh',
  },
  hv75: {
    minHeight: '75vh',
  },
  hv50: {
    minHeight: '50vh',
  },
  hv25: {
    minHeight: '25vh',
  },
  hero: {
    height: '100vh',
  },
  heroContentBox: {
    flexGrow: 1,
  },
  heroContent: {
    height: '100%',
  },
  heroButton: {
    marginTop: '2.5rem',
  },
}))

const Index = () => {
  const classes = useStyles()
  return (
    <fragment>
      <Grid container direction="column" className={classes.hero}>
        <Grid item>
          <MainHeader />
        </Grid>
        <Grid item className={classes.heroContentBox}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.heroContent}>
            <Grid item>
              <Container maxWidth="md">
                <Typography variant="h3" align="center">
                  {content[lang].hero.title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {content[lang].hero.subtitle}
                </Typography>
                <Typography align="center" className={classes.heroButton}>
                  <Link href="about">
                    <Button variant="outlined" color="primary">
                      {content[lang].hero.button}
                    </Button>
                  </Link>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Kami adalah doscom</Typography>
          </Grid>
          <Grid item md={7}>
            <Typography variant="h5" paragraph="true">
              Dinus Open Source Community
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Typography>
            <Button variant="text" color="primary">
              Lihat kegiatan kami
            </Button>
          </Grid>
          <Grid item md={5}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <CardProfile
                  name="Fahri Firdausillah"
                  position="Pembimbing"
                  photo="/img/mentor.jpg"
                />
              </Grid>
              <Grid item>
                <CardProfile
                  name="Kun Amrin"
                  position="Ketua Doscom"
                  photo="/img/leader.jpg"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems=" className={classes.hv50}"
          spacing={8}
          className={classes.hv50}>
          <Grid item xs={12} style={{ marginBottom: '2rem' }}>
            <Typography variant="h3">Divisi</Typography>
          </Grid>
          {divisions.map(dev => (
            <Grid item xs={12} md={4}>
              <CardDivision
                name={dev.name}
                desctiption={dev.desc}
                icon={dev.icon}
                iconBackground={dev.iconBackground}
                xs={3}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        className={classes.hv50}
        style={{ backgroundColor: 'black' }}>
        <Grid item>
          <Container>
            <Typography variant="h3" style={{ color: 'white' }}>
              Kegiatan
            </Typography>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <CarouselEvent events={events} />
          </Container>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        className={classes.hv100}>
        <Grid item>
          <Container>
            <Typography variant="h3">Galeri</Typography>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <Grid container justify="center" alignItems="center" spacing={4}>
              {[...Array(12).keys()].map(foo => (
                <Grid item xs={3}>
                  <Container>
                    <CardGalery />
                  </Container>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </fragment>
  )
}

export default Index
