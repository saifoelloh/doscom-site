import { Container } from "@material-ui/core"
import React from "react"

import CardEvent from "../components/landing-page/card-event.jsx"

const Index = (props) => {
  return (
    <Container>
      <h1>Hello</h1>
      {[...Array(5).keys()].map((item) => (
        <CardEvent key={item} />
      ))}
    </Container>
  )
}

export default Index
