import React from 'react';
import Photo from './Photo';
import { Grid } from '@material-ui/core';

const SearchResult = (props) => {

  const { photos } = props;

  return (
    <div style={{ padding: '20px 30px'}}>
      <Grid container spacing={4} m={3}>
        {photos.map(photo => (
          <Grid item key={photo.id} xs={12} sm={4} md={2}>
            <Photo url={photo.img_src} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SearchResult
