import SearchBar from '../components/SearchBar/SearchBar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSearchTerm } from '../store/slices/recipeSlice'

function HomePage() {
  const dispatch = useAppDispatch()
  const searchTerm = useAppSelector((state) => state.recipe.searchTerm)

  const handleSearch = (query: string) => {
    dispatch(setSearchTerm(query))
    console.log('searching for:', searchTerm)
  }

  return (
    <>
      <h1>HomePage</h1>
      <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default HomePage
