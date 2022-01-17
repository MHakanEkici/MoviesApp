import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://10.0.3.2:3000/genres';

export default function useGenres() {
  const [genreData, setData] = useState(null);
  const [genreError, setError] = useState(null);
  

  async function fetchGenres() {
    try {
      const response = await axios.get(URL);
      response.data.push({
        name: 'ALL GENRES',
      });
      setData(response.data); //setData(response.data.filter(genre => (genre.isSelected = true)));
    } catch (error) {
      setError(error);
    } 
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  return {
    genreData,
    genreError,
    fetchGenres,
  };
}
