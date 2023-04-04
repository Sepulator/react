import { ProductApi } from '@/types/data';
import { useEffect, useState } from 'react';

export const useFetch = (query: string, url = 'https://dummyjson.com') => {
  const [data, setData] = useState<ProductApi | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsPending(true);
    setTimeout(async () => {
      try {
        const response = await fetch(`${url}${query}`, { signal: abortCont.signal });
        const result = await response.json();
        if (result.total) setTotal(result.total);
        setData(result);
        setIsPending(false);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
        } else {
          let message = 'Unknown Error';
          if (error instanceof Error) message = error.message;
          setError(message);
          setIsPending(false);
        }
      }
    }, 500);

    return () => abortCont.abort();
  }, [query, url]);

  return { data, total, isPending, error };
};
