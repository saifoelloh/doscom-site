import React from 'react'
import Slider from 'react-slick'

import CardEvent from './CardEvent'

const CarouselEvent = ({ events }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    inifinite: true,
    initialSlide: 0,
    slideToShow: 1,
    speed: 500,
  }
  return (
    <Slider {...settings}>
      {events.map(event => (
        <CardEvent key={event.capacity} event={event} />
      ))}
    </Slider>
  )
}

export default CarouselEvent
