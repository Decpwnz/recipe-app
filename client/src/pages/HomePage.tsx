import SearchBar from '../components/SearchBar/SearchBar'

function HomePage() {
  const handleSearch = (query: string) => {
    console.log('searching for:', query)
  }

  return (
    <>
      <h1>HomePage</h1>
      <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default HomePage
