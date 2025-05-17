import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const userApiSlice =  createApi({
    reducerPath : 'userApiSlice',
    baseQuery : fetchBaseQuery({baseUrl :'http://localhost:5000/api/'}),
    

    endpoints : (build) =>({
        getUser : build.query({
            query : () => 'users',
        }),

        getUserById : build.query({
            query: (id)=> `users/${id}`,

            providesTags: (result, error, id) => [{ type: 'Product', id }],
        })

      
    })
})


export const {useGetUserQuery, useGetUserByIdQuery} = userApiSlice;



