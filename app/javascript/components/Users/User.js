import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 160,
    marginBottom: 12
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  }
})

const User = (props) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Grid item xs={4} className={null}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {bull} {props.attributes.full_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/users/${props.attributes.id}`} variant="contained" color="primary" >View User</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default User