import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://10.0.3.2:3000/movies';

export default function useMovies() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    data,
    loading,
    error,
    fetchMovies,
  };
}
