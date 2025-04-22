import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    productData:productReducer,
  },
})
