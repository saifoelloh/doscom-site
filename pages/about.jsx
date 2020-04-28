import { Container } from "@material-ui/core"
import React from "react"
import Slider from "react-slick"

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
  }
  return (
    <fragment>
      <h1>About</h1>
      <Container style={{ backgroundColor: "grey" }}>
        <Slider {...settings}>
          {[0, 1, 2, 3, 4, 5, 6].map((id) => {
            return (
              <div>
                <h1>{id}</h1>
              </div>
            )
          })}
        </Slider>
      </Container>
    </fragment>
  )
}

export default About
