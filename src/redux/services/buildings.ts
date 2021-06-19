import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const buildingApi = createApi({
  reducerPath: "buildingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://data.cityofchicago.org/resource/ydr8-5enu.json/"
  }),
  tagTypes: [],
  endpoints: builder => ({
    getBuilding: builder.query({
      query: (id: string) => `?id=${id}`
    }),
    getBuildings: builder.query({
      query: () => `/`
    })
  })
})

export const { useGetBuildingQuery, useGetBuildingsQuery } = buildingApi
