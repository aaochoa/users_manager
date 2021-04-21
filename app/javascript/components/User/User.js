import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 'auto'
  }
});

const User = (props) => {
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = props.match.params.id
    const url = `/api/v1/users/${id}`
    axios.get(url).then(res => {
      setUser(res.data)
      setLoaded(true)
    }).catch(err => console.log(err))
  }, [])
  return (
    <Card className={classes.root}>
      { loaded &&
        <CardActionArea>
          <CardMedia component="img" alt={user.data.attributes.full_name} height="500" image={user.data.attributes.image_url} title={user.data.attributes.full_name}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.data.attributes.full_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
              <li>{user.data.attributes.gender}</li>
              <li>{user.data.attributes.birthday}</li>
            </Typography>
          </CardContent>
        </CardActionArea>
      }
    </Card>
  )
}

export default User