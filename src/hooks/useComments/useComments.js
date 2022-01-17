import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useComments(movieId) {
  const [commentData, setCommentData] = useState(null);
  const [commentError, setCommentError] = useState(null);
  const [commentLoading, setCommentLoading] = useState(true);

  const URL = `http://10.0.3.2:3000/comments?movieId=${movieId}`;

  async function fetchComments() {
    try {
      const response = await axios.get(URL);
      setCommentData(response.data);
    } catch (error) {
      setCommentError(error);
    } finally {
      setCommentLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return {
    commentData,
    commentLoading,
    commentError,
    fetchComments,
  };
}
