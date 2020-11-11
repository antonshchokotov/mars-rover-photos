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
  Button
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
            <h2>Filter settings</h2>
            <Grid container
              direction={'column'}
              spacing={2}
            >
              <Grid item>
                <FormControl>
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
                <FormControl>
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
              <Grid item>
                <FormControl>
                  <TextField
                    label={'Sol (Mars day)'}
                    onChange={(e)=>{setSol(e.target.value)}}
                    value={sol}
                    type={'number'}
                  >
                  </TextField>
                </FormControl>
              </Grid>
              <Grid container item justify="flex-end">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={saveFilter}
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
