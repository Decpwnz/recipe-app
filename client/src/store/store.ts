import { configureStore } from '@reduxjs/toolkit'

import recipeSlice from './slices/recipeSlice'

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
