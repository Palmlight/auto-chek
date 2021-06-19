import { configureStore, Action } from "@reduxjs/toolkit"
import { buildingApi } from "../services/buildings"
import { setupListeners } from "@reduxjs/toolkit/query"
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [buildingApi.reducerPath]: buildingApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(buildingApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
