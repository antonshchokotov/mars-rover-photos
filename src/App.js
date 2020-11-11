import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import { useState } from 'react';
import Axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import Loader from './components/Loader';

function App() {

  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState({
    rover: 'Opportunity',
    camera: 'All',
    sol: 100
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleFilterChange(filter);
  }, []);

  const handleFilterChange = async (newFilter) => {
    setIsLoading(true);
    const { rover, camera, sol } = newFilter;
    setFilter(newFilter);
    setPage(1);
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${camera === 'All' ? '' : '&camera='+camera}&page=${page}&api_key=DEMO_KEY`;
    try {
      const { data: { photos: newPhotos } } = await Axios.get(url);
      setPhotos(newPhotos);
    } catch (error) {
      console.log('Error during api call:', error);
      setPhotos([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMorePhotos = async () => {
    setIsLoading(true);
    const { rover, camera, sol } = filter;
    setPage(page => page + 1);
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}${camera === 'All' ? '' : '&camera='+camera}&page=${page}&api_key=DEMO_KEY`;
    const { data: { photos: newPhotos } } = await Axios.get(url);
    setPhotos(photos => [...photos, ...newPhotos]);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Header
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      {photos[0] && (
        <>
          <SearchResult photos={photos}/>
          <Button
            variant='contained'
            onClick={loadMorePhotos}
          >
            Load more
          </Button>
        </>
      )}
      {isLoading && <Loader />}
      {!photos[0] && !isLoading && (
        <Typography variant="h6" style={{marginTop: '50px'}}>
          No photos found, try another filter
        </Typography>
      )}
    </div>
  );
}

export default App;
