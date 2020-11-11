import React, { useState } from 'react'
import { AppBar,
  Toolbar,
  Typography,
  IconButton } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsModal from './SettingsModal';

const Header = (props) => {

  const { handleFilterChange, filter } = props;

  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => { setIsModalOpened(true) };
  const closeModal = () => { setIsModalOpened(false) };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Mars Rover Photos</Typography>
        <IconButton>
          <SettingsIcon 
            style={{color: "white"}}
            onClick={openModal}
          />
          <SettingsModal
            isModalOpened={isModalOpened}
            closeModal={closeModal}
            handleFilterChange={handleFilterChange}
            filter={filter}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
