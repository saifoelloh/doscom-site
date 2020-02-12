import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const CardDivision = ({
  name,
  desctiption,
  background,
  icon,
  iconBackground,
}) => {
  return (
    <fragment>
      <Grid container direction="column" spacing={4}>
        <Grid
          item
          style={{
            backgroundImage: `url('/img/bg-division-programming.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '10px',
            paddingTop: 0,
          }}>
          <Container>
            <div
              style={{
                maxWidth: 50,
                position: 'relative',
                bottom: '2rem',
                border: '3px solid white',
                borderRadius: 5,
                backgroundColor: iconBackground,
              }}>
              {icon}
            </div>
          </Container>
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle2" align="justify">
            {desctiption}
          </Typography>
        </Grid>
      </Grid>
    </fragment>
  )
}

export default CardDivision
