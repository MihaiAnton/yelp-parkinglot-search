import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

const computeScore = (reviewCount, rating) => {
  return ((reviewCount * rating) / (reviewCount + 1)).toFixed(2)
}

const ParkingLotCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader title={props.name} subheader={props.address} />
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Parking lot image"
      />
      <CardContent>
        <p>Star rating: {props.rating}</p>
        <p>Review count: {props.reviewCount}</p>
        <p>Score: {computeScore(props.reviewCount, props.rating)}</p>
        <a href={props.link}>Check it out!</a>
      </CardContent>
    </Card>
  )
}

export default ParkingLotCard
