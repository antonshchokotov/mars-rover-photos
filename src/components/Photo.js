import React, { useState } from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#808080d4',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1
  }
}));

const Photo = (props) => {
  const { url } = props;
  const [isPhotoOpened, setIsPhotoOpened] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Card>
        <CardMedia
          style={{paddingTop: '100%', cursor: 'pointer'}}
          image={url}
          title="Photo"
          onClick={()=>setIsPhotoOpened(true)}
        />
      </Card>
      {
        isPhotoOpened && (
          <Grid container 
            className={classes.root}
            justify='center'
            alignItems='center'
            onClick={()=>setIsPhotoOpened(false)}
          >
            <Grid item xs={10} sm={6} md={5} style={{marginTop: '64px'}}>
              <Card>
                <CardMedia
                  style={{paddingTop: '100%'}}
                  image={url}
                  title="Photo"
                />
              </Card>
            </Grid>
          </Grid>

        )
      }
    </>
  )
}

export default Photo
