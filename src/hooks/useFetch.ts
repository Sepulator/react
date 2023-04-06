import { useAppDispatch } from '@/store/hooks';
import { useEffect, useState } from 'react';

import { receivedProducts } from '@/store/producstSlice';
import { ProductApi } from '@/types/data';

// const search = `/products/search?q=`;
const limit = 24;
const skip = 0;
const search = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

export const useFetch = (query?: string, url = 'https://dummyjson.com') => {
  //const [data, setData] = useState<ProductApi | null>(null);
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsPending(true);
    setTimeout(async () => {
      try {
        const response = await fetch(search, {
          signal: abortCont.signal,
        });
        const result: ProductApi = await response.json();
        if (result.total) setTotal(result.total);
        const products = result.products;
        dispatch(receivedProducts(products));
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
  }, [dispatch, query, url]);

  return { total, isPending, error };
};
