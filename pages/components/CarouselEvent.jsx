import { Container } from '@material-ui/core'
import React from 'react'
import Slider from 'react-slick'

import CardEvent from './CardEvent'

const CarouselEvent = ({ events }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    inifinite: true,
    centerPadding: '100px',
    slideToShow: 1,
    speed: 500,
  }
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6, 7].map((event) => (
        <Container>
          <CardEvent key={event.capacity} />
        </Container>
      ))}
    </Slider>
  )
}

export default CarouselEvent
