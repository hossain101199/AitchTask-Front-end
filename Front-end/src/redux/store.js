import { configureStore } from "@reduxjs/toolkit";
import { API } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
