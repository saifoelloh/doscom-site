import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core"
import {
  faArrowRight,
  faDollarSign,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme) => ({
  imageThumbnail: {
    backgroundImage: `url("https://miro.medium.com/max/1024/1*-BCQkJ587iBYwue-SNrTYw.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "200px",
  },
  cardActions: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "content-between",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  cardActionsDetail: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cardActionsInfo: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "end",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}))

const CardEvent = (props) => {
  const classes = useStyles()
  return (
    <Card style={{ margin: ".5rem" }}>
      <Grid container>
        <Grid
          container
          item
          justify="center"
          alignItems="flex-end"
          height="100"
          xs={12}
          md={4}
          className={classes.imageThumbnail}
        >
          <Typography variant="subtitle1" style={{ marginBottom: "1rem" }}>
            {new Intl.DateTimeFormat("en-GB").format(Date.now())}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ backgroundColor: "lightbluesky" }}
            >
              Release Party
            </Typography>
            <hr
              style={{
                margin: ".5rem 0 1rem 0",
                height: "5px",
                width: "61px",
                backgroundColor: "#2196F3",
                border: "0",
              }}
            />
            <Typography
              align="justify"
              variant="subtitle1"
              color="textSecondary"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container className={classes.cardActions}>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                  className={classes.cardActionsDetail}
                >
                  Selengkapnya
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={6}
                className={classes.cardActionsInfo}
              >
                <Button startIcon={<FontAwesomeIcon icon={faUsers} />} disabled>
                  25 Orang
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faDollarSign} />}
                  disabled
                >
                  Berbayar
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default React.memo(CardEvent)
