import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface UseFetchReturn<T> {
 data: T;
 isLoading: boolean;
 error: AxiosError | null;
 refetch: () => void;
}

const useFetch = <T>( endpoint:string, query: Record<string, unknown> ): UseFetchReturn<T> => {
  const [data, setData] = useState<T>([] as unknown as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const options = {
    method: 'GET',
    url: endpoint,
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request<T>(options);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      } else {
        setError(new AxiosError('An unknown error occurred'));
      }
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
