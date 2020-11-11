import React from 'react';
import Photo from './Photo';
import { Grid } from '@material-ui/core';

const SearchResult = (props) => {

  const { photos } = props;

  return (
    <div style={{ padding: '20px 5%'}}>
      <Grid container spacing={3}>
        {photos.map(photo => (
          <Grid item key={photo.id} xs={6} sm={3} md={2}>
            <Photo url={photo.img_src} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SearchResult
