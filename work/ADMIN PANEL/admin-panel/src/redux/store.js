import { configureStore } from '@reduxjs/toolkit'
import product from './features/productSlice'
import editSlice from "./features/editSlice";

export const store = configureStore({
  reducer: {
data:product,
edit:editSlice,

  },
})

    