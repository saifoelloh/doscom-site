import { Container, Grid } from "@material-ui/core"
import React from "react"
import Slider from "react-slick"

import CardDivision from "../components/landing-page/card-division.jsx"
import CardEvent from "../components/landing-page/card-event.jsx"
import { SectionAbout } from "../components/landing-page/section"

const Index = (props) => {
  const settings = {
    accessibility: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
  }
  return (
    <main>
      <Container>
        <h1>Hello</h1>
        <SectionAbout />
        <Grid container spacing={5}>
          {[...Array(3).keys()].map((item) => (
            <Grid item md={4}>
              <CardDivision key={item} />
            </Grid>
          ))}
        </Grid>
        <Slider {...settings}>
          {[...Array(5).keys()].map((item) => (
            <CardEvent key={item} />
          ))}
        </Slider>
      </Container>
    </main>
  )
}

export default Index
