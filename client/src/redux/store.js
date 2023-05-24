import { configureStore } from "@reduxjs/toolkit"
import { tweetsApi } from "./services/tweetsApi";
import tweetsReducer from './features/tweetsSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    tweetsReducer,
    [tweetsApi.reducerPath]: tweetsApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([tweetsApi.middleware])
});

setupListeners(store.dispatch);
