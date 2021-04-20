import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import User from "./User"
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Typography, Container, Grid } from '@material-ui/core'
import UserForm from "./UserForm";

function checkProperties(obj) {
  for (var key in obj) {
    if (obj[key] == null || obj[key] == "") return false;
  }
  return true;
}

const useStyles = makeStyles(() => ({
  cardsTitle: {
    margin: 'auto',
    fontSize: 25,
    fontWeight: 900,
    fontStyle: 'italic',
    textAlign: 'center', 
    marginTop: 10,
    marginBottom: 10
  }
}))

const Users = () => {
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  
  useEffect(() => {
    axios.get('/api/v1/users.json').then( res => setUsers(res.data.data) ).catch( err => console.log(err) )
  }, [])

  const grid = users.map(item => {
    return (
      <User key={item.attributes.full_name} attributes={item.attributes}/>
    )
  })

  const handleChange = (e) => {
    e.preventDefault()
    setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkProperties(user)) {
      axios.post('/api/v1/users', {user}).then(res => console.log(res)).catch(err => console.log(err))
    }
  }

  return (
    <Fragment>
      <CssBaseline />
      <Typography component="h1" className={classes.cardsTitle}>
        Users Manager
      </Typography>
      <Container maxWidth="sm">
        <Typography component="div">
          <Grid container direction="row" alignContent="center" alignItems="center" wrap="wrap" spacing={1}>
            {grid}
          </Grid>
        </Typography>
      </Container>
      <UserForm handleSubmit={handleSubmit} handleChange={handleChange} user={user}/>
    </Fragment>
  )
}

export default Users