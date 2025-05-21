
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


 export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/api/'}),
    
   tagTypes : ['Product'],
   endpoints: (build) => ({

    getProduct: build.query({
      query: () =>  'product',

      providesTags : ['Product'],
    }),

     getProductById: build.query({
      query: (id) => `product/${id}`,
       
     providesTags: (result, error, id) => [{ type: 'Product', id }],
    
    }),

    deleteProduct : build.mutation({
      query : (id) =>({
        url : `product/${id}`,
        method : "DELETE",
    

        
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],

       // invalidatesTags : ['Product'],
      })

     

    })

   





  }),
 })



 export const {useGetProductQuery, useGetProductByIdQuery, useDeleteProductMutation} = productApi ; 
 