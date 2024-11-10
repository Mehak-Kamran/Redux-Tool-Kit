import { configureStore } from '@reduxjs/toolkit'
import counterslice from "./slice/counter/index"

export const store = configureStore({
  reducer: {
    counter:counterslice
  },
})