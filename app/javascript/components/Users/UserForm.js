import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, Input, InputLabel, Fab, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const UserForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    props.setUser({full_name: '', birthday: '', gender: '', image_url: ''})
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Fragment>
      <Fab color="primary" aria-label="add" className={ classes.fab } onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a New User</DialogTitle>
        <DialogContent>
          <form className={classes.root} onSubmit={props.handleSubmit} autoComplete="off">
            <FormControl>
              <InputLabel htmlFor="fullName">Full Name</InputLabel>
              <Input id="fullName" name="full_name" onChange={props.handleChange} value={props.user.full_name}/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="imageURL">Image URL</InputLabel>
              <Input id="imageURL" name="image_url" onChange={props.handleChange} value={props.user.image_url}/>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="genderSelect">Gender</InputLabel>
              <Select labelId="genderSelect" id="gender" displayEmpty name="gender" className={classes.selectEmpty} defaultValue="" onChange={props.handleChange} value={props.user.gender}>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
            </FormControl>
            <TextField id="datetime-local" label="Birthday" name="birthday" type="datetime-local" className={classes.textField} InputLabelProps={{ shrink: true }} onChange={props.handleChange} value={props.user.birthday}/>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}

export default UserForm