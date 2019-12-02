import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField, MenuItem, Button, Grid, Paper } from '@material-ui/core';
import MaterialUIPickers from './DatePicker';
const locations = [
  {
    value: 'FURL Internal',
    label: 'FURL Internal',
  },
  {
    value: 'FURL External',
    label: 'FURL External',
  },
  {
    value: 'Alias LBI',
    label: 'Alias LBI',
  },
  {
    value: 'Alias LBE',
    label: 'Alias LBE',
  },
  {
    value: 'Alias LB',
    label: 'Alias LB',
  },
];
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, handleClose, handleSubmit }) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [formData, setFormData] = React.useState({});



  const handleChange = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value })
  };
  console.log('formData', formData);

  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add FURL</h2>
            <Grid container spacing={3}>
              {/* <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Entry Id" variant="outlined" onChange={(event) => handleChange(event, "entry_id")} />
                </Paper>
              </Grid> */}
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Furl Description" name="furl_description" fullWidth variant="outlined" onChange={(event) => handleChange(event, "furl_description")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Target" fullWidth variant="outlined" onChange={(event) => handleChange(event, "target")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Contact" fullWidth variant="outlined" onChange={(event) => handleChange(event, "lead_contact")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Alias Location"
                    name="AliasLocation"
                    value={formData.AliasLocation}
                    onChange={(event) => handleChange(event, "location")} fullWidth variant="outlined"
                  >
                    {locations.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Description" fullWidth variant="outlined" onChange={(event) => handleChange(event, "description")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="UPI" fullWidth variant="outlined" onChange={(event) => handleChange(event, "upi")} />
                </Paper>
              </Grid>


              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Phone" fullWidth variant="outlined" onChange={(event) => handleChange(event, "Phone")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Email" fullWidth variant="outlined" onChange={(event) => handleChange(event, "Email")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Unit" fullWidth variant="outlined" onChange={(event) => handleChange(event, "Unit")} />
                </Paper>
              </Grid>


              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <MaterialUIPickers />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows="4"
                    // defaultValue="Default Value"
                    fullWidth variant="outlined"
                    onChange={(event) => handleChange(event, "comments")}
                  />          </Paper>
              </Grid>

            </Grid>

<br/>
            <Button variant="contained" color="primary" onClick={() => handleSubmit(formData)} m={0.5}>
              Save
            </Button> &nbsp;
            <Button variant="contained" color="secondary" onClick={handleClose}>
              close
</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
