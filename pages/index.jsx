import { Container } from "@material-ui/core"
import React from "react"
import Slider from "react-slick"

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
