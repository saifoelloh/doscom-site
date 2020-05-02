import { Grid, Typography } from "@material-ui/core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import CardUser from "../card-user.jsx"

const SectionAbout = (props) => {
  const users = [
    {
      name: "Fahri Firdausillah",
      title: "Pembimbing DOSCOM",
      photo: "/images/fahri.jpg",
    },
    {
      name: "Kun Amrin Amanu",
      title: "Ketua DOSCOM",
      photo: "/images/amrin.jpg",
    },
  ]
  return (
    <div style={{ margin: "5rem 0" }}>
      <Typography variant="h4">Kami adalah doscom.</Typography>
      <hr
        style={{
          margin: ".5rem 0 1rem 0",
          height: "5px",
          width: "61px",
          backgroundColor: "#2196F3",
          border: "0",
        }}
      />
      <Grid container spacing={3}>
        <Grid container item direction="column" md={7}>
          <Typography variant="h6">Dinus Open Source Community</Typography>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </Typography>
          <Link href="/about">
            <Typography
              component="a"
              color="primary"
              style={{ margin: "1rem 0" }}
            >
              Lihat kegiatan kami
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ margin: "0 .5rem" }}
              />
            </Typography>
          </Link>
        </Grid>
        <Grid item md={5} container direction="column" spacing={2}>
          {users.map((user, id) => (
            <Grid key={id} item container spacing={2} alignItems="center" xs>
              <CardUser key={id} user={user} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default React.memo(SectionAbout)
