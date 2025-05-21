import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const userApiSlice =  createApi({
    reducerPath : 'userApiSlice',
    baseQuery : fetchBaseQuery({baseUrl :'http://localhost:5000/api/'}),
    
    tagTypes : ['User'],

    endpoints : (build) =>({
        getUser : build.query({
            query : () => 'users',
            
            // providesTags : ['User'],
              providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
        }),

        getUserById : build.query({
            query: (id)=> `users/${id}`,

            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),

        postUser : build.mutation({
            query : (user) =>({
                url : 'users',
                method : 'POST',
                body : user,
               
            })
        }),

        updateUser : build.mutation({
            query : (user)=> ({
             
                url : `users/${user.id}`,
                method : 'PUT',
                body : user,
            }),

             invalidatesTags: (result, error, user) => [{ type: 'User', id: user.id }],

        }),

        DeleteUser : build.mutation({
            query : (id) =>({
                url : `users/${id}`,
                method : 'DELETE',
                
            })
        })



      
    })
})


export const {useGetUserQuery,usePostUserMutation, useGetUserByIdQuery, useUpdateUserMutation,useDeleteUserMutation} = userApiSlice;



