import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import FavoritesPage from './pages/FavoritesPages.tsx'
import HomePage from './pages/HomePage.tsx'
import RecipeDetailsPage from './pages/RecipeDetailsPage.tsx'
import ShoppingListPage from './pages/ShoppingListPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'recipedetails', element: <RecipeDetailsPage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'shoppinglist', element: <ShoppingListPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
