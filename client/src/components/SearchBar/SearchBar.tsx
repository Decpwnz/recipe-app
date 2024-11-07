import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'

import { ContentPaper } from './SearchBar.styles'
import { SearchBarProps } from '../../types/SearchBarProps'

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchValue)
    setSearchValue('')
  }

  return (
    <ContentPaper component="form" onSubmit={handleSubmit}>
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
