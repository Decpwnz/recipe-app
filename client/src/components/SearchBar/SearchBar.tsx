import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'

import { ContentPaper } from './SearchBar.styles'
import { SearchBarProps } from '../../types/SearchBarProps'

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchValue)
  }

  return (
    <ContentPaper onSubmit={handleSubmit}>
      <InputBase
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </ContentPaper>
  )
}
