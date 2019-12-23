import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField, MenuItem, Button, Grid, Paper } from '@material-ui/core';
import MaterialUIPickers from './DatePicker';
import Axios from 'axios';
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

export default function TransitionsModal({ eachRowData,setRowData,open, handleClose, handleSubmit }) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const [formData, setFormData] = React.useState({});



  const handleChange = (event, name) => {
    //if (name==='lead_contact') {
    //   Axios.post('',event.target.value).then(
    //    (data)=>{
    //      console.log(data);
         
    //    }
    //  );
   // }
   console.log('eachRow',event.target.value);
   
   setFormData({ ...eachRowData, [name]: event.target.value })
    console.log('eachRowDataeachRowData',formData);

  };

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
                  <TextField id="outlined-basic" label="Entry Id" InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "entry_id")} />
                </Paper>
              </Grid> */}
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.lead_contact} label="Contact" fullWidth InputLabelProps={{ shrink: true }} 
                  onChange={(event) => handleChange(event, "lead_contact")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" label="Furl Description" 
                  value={eachRowData && eachRowData.furl_description}
                   name="furl_description" fullWidth InputLabelProps={{ shrink: true }}
                    onChange={(event) => handleChange(event, "furl_description")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.target}
                  label="Target" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "target")} />
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
                    onChange={(event) => handleChange(event, "location")} fullWidth InputLabelProps={{ shrink: true }}
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
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.description} label="Description" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "description")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.upi} label="UPI" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "upi")} />
                </Paper>
              </Grid>


              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.Phone} label="Phone" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "Phone")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.Email} label="Email" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "Email")} />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <TextField id="outlined-basic" value={eachRowData && eachRowData.Unit} label="Unit" fullWidth InputLabelProps={{ shrink: true }} onChange={(event) => handleChange(event, "Unit")} />
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
                    value={eachRowData && eachRowData.comments}
                    // defaultValue="Default Value"
                    fullWidth InputLabelProps={{ shrink: true }}
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
