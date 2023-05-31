import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/users/", }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "all",
        method: 'GET',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }),
      providesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: (userId) => `user/${userId}`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "create",
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),

})

export const { useGetAllUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = usersApi;
