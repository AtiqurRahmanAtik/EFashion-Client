
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


 export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/api'}),
    
   
   endpoints: (build) => ({
    getProduct: build.query({
      query: () =>  '/product',
    }),

     getProductById: build.query({
      query: (id) => `/product/${id}`,
    }),
  }),
 })



 export const {useGetProductQuery, useGetProductByIdQuery} = productApi ; 
 