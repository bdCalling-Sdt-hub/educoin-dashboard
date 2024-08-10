import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.185:5001/api/v1",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    }
  }),
  endpoints: () => ({}),
});

export const imageUrl = "http://192.168.10.185:5001";
