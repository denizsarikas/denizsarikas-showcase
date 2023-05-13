import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    setTimeout(() => {
      axios.get(url, { cancelToken: source.token })
        .then(response => {
          setData(response.data);
          setIsPending(false);
          setError(null);
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
          } else {
            setIsPending(false);
            setError(error.message);
          }
        });
    }, 1000);

    return () => source.cancel('Request canceled');
  }, [url]);

  return { data, isPending, error };
};

export default useAxios;
