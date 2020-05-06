import { Card, CardContent, Container, Typography } from "@material-ui/core"
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardDivision = () => {
  return (
    <Card>
      <Container>
        <FontAwesomeIcon icon={faAlignLeft} enableBackground size="lg" />
      </Container>
      <CardContent>
        <Typography hutterBottom variant="h5" component="h2">
          Programming
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardDivision
