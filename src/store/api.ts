import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product, ProductApi } from '@/types/data';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductApi, string>({
      query: (name) => `search?q=${name}&limit=24&skip=0`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
