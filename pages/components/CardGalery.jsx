import { Paper, Typography } from '@material-ui/core'
import React from 'react'

let foo = false
const tulisan = {
  display: foo ? 'block' : 'none',
}

const CardGalery = props => (
  <Paper
    variant="outlined"
    onClick={() => {
      console.log({ msg: 'hello' })
      foo = !false
    }}>
    <img
      width="100%"
      src="https://cdn.shopify.com/s/files/1/1465/2246/products/Logo.png?v=1556045462"
      alt=""
    />
    <Typography variant="h1" style={tulisan}>
      hello
    </Typography>
  </Paper>
)

export default CardGalery
