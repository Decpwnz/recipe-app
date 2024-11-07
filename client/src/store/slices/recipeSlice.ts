import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Recipe } from '../../types/Recipe'

export interface RecipeState {
  recipes: Recipe[]
  loading: boolean
  error: string | null
  searchTerm: string
  searchResults: Recipe[]
  currentlySelectedRecipe: Recipe | null
}

export const initialState: RecipeState = {
  recipes: [],
  loading: true,
  error: null,
  searchTerm: '',
  searchResults: [],
  currentlySelectedRecipe: null,
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setSearchResults: (state, action: PayloadAction<Recipe[]>) => {
      state.searchResults = action.payload
    },
    setSelectedRecipe: (state, action: PayloadAction<Recipe | null>) => {
      state.currentlySelectedRecipe = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const {
  setRecipes,
  setLoading,
  setError,
  setSearchResults,
  setSelectedRecipe,
  setSearchTerm,
} = recipeSlice.actions

export default recipeSlice.reducer
