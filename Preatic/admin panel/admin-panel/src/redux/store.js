import { configureStore } from '@reduxjs/toolkit'
import product from './features/productSlice'

export const store = configureStore({
  reducer: {
    data:product
  },
})

    