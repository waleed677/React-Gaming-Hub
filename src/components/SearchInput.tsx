import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { SyntheticEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch : (query : string) => void
}

const SearchInput = ({onSearch} : Props) => {
    const searchQuery= useRef<HTMLInputElement>(null);

    const handleSubmit = (event : SyntheticEvent) => {
        event.preventDefault()
        if( searchQuery.current) onSearch(searchQuery.current?.value)
    }

  return (
    <form onSubmit={handleSubmit}>
    <InputGroup>
        <InputLeftElement><BsSearch/></InputLeftElement>
        <Input ref={searchQuery} placeholder='Search here...' type='text' borderRadius={10} variant="filled"/>
    </InputGroup>
    </form>
  )
}

export default SearchInput