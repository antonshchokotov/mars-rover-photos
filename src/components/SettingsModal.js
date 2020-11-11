import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Fade,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import apiKeys from '../constants/apiKeys';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none'
  },
  select: {
    minWidth: '260px',
  }
}));

const SettingsModal = (props) => {
  const { isModalOpened, closeModal, handleFilterChange, filter } = props;
  const { rover: rover_, camera: camera_, sol: sol_ } = filter;
  const classes = useStyles();
  const [rover, setRover] = useState(rover_);
  const [camera, setCamera] = useState(camera_);
  const [sol, setSol] = useState(sol_);

  const saveFilter = () => {
    const filter = {
      rover,
      camera,
      sol
    };
    handleFilterChange(filter);
    closeModal();
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isModalOpened}
        onClose={closeModal}
        closeAfterTransition
      >
        <Fade in={isModalOpened}>
          <div className={classes.paper}>
            <Typography
              variant='h5'
              align='center'
              style={{marginBottom: '20px'}}
            >
              Filter settings
            </Typography>
            <Grid container
              direction={'column'}
              spacing={2}
            >
              <Grid item>
                <FormControl className={classes.select}>
                  <InputLabel>Rover</InputLabel>
                  <Select
                    value={rover}
                    onChange={(e)=>{setRover(e.target.value)}}
                  >
                    {apiKeys.rovers.map(rover=>(
                      <MenuItem value={rover}>{rover}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.select}>
                  <InputLabel>Camera</InputLabel>
                  <Select
                    value={camera}
                    onChange={(e)=>{setCamera(e.target.value)}}
                  >
                    {Object.entries(apiKeys.cameras).map(([key, value]) => (
                      <MenuItem value={key}>{value}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item >
                <FormControl className={classes.select}>
                  <TextField
                    label={'Sol (Mars day)'}
                    onChange={(e)=>{setSol(e.target.value)}}
                    value={sol}
                    type={'number'}
                  >
                  </TextField>
                </FormControl>
              </Grid>
              <Grid container item>
                <Grid item xs={12} style={{marginTop: '10px'}}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={saveFilter}
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SettingsModal
