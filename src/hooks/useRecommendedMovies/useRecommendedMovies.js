import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useRecommendedMovies(movieGenre) {
  const [recMovieData, setRecMovieData] = useState(null);
  const [recMovieError, setRecMovieError] = useState(null);
  const [recMovieLoading, setRecMovieLoading] = useState(true);

  const URL = `http://10.0.3.2:3000/movies?genre_like=${movieGenre}`;

  async function fetchRecommendedMovies() {
    try {
      setRecMovieLoading(true);
      const response = await axios.get(URL);
      setRecMovieData(response.data);
    } catch (error) {
      setRecMovieError(error);
    } finally {
      setRecMovieLoading(false);
    }
  }

  useEffect(() => {
    fetchRecommendedMovies();
  }, []);

  return {
    recMovieData,
    recMovieError,
    recMovieLoading,
    fetchRecommendedMovies,
  };
}
