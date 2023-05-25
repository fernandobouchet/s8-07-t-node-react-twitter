import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { initialState } = require("@/data/tweets.js");

export const tweetsApi = createApi(
  {
    reducerPath: "tweetsApi",
    refetchOnFocus: true, // when the window is refocused, refetch the data
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/", }),
    tagTypes: ["Tweets"],
    endpoints: (builder) => ({
      getAllTweets: builder.query({
        query: () => ({
          url: "tweets",
          method: 'GET',
          credentials: 'include',
          headers: {
            'content-type': 'application/json'
          }
        }),
        providesTags: ["Tweets"],
        transformResponse: (response) => {
          return [...response, ...initialState]
        }
      }),
      getTweetsByUserId: builder.query({
        query: ({ userId }) => `user/${userId}`,
      }),
      createTweet: builder.mutation({
        query: (payload) => ({
          url: "create",
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            content: payload.content,
            hashtags: payload.hashtags
          }),
          headers: {
            'content-type': 'application/json'
          }
        }),
        invalidatesTags: ["Tweets"],
      }),
      likeTweet: builder.mutation({
        query: (tweetId) => ({
          url: `like/${tweetId}`,
          method: 'PUT',
          credentials: 'include',
          headers: {
            'content-type': 'application/json'
          },
        }),
        invalidatesTags: ["Tweets"],
      }),
    }),

  }
)

export const { useGetAllTweetsQuery, useGetTweetsByUserIdQuery, useCreateTweetMutation, useLikeTweetMutation } = tweetsApi
