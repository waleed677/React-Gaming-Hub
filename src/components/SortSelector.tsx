import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Props {
    onSelectSorting : (sorting : string) => void,
    selectedSortOrder : string
}

const SortSelector = ({ selectedSortOrder, onSelectSorting} : Props) => {

    const sortOrders = [
        { value : '' , label : 'Relevance'},
        { value : 'name' , label : 'Name'},
        { value : '-released' , label : 'Release date'},
        { value : '-added' , label : 'Date added'},
        { value : '-rating' , label : 'Average rating'},
        { value : '-metacritic' , label : 'Popularity'}
    ]


    const selectedOrder = sortOrders.find( item => item.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton marginBottom={3} as={Button} rightIcon={<BsChevronDown />}>
       Order By {selectedOrder?.label || 'Relevance'} 
      </MenuButton>
      <MenuList>
        {sortOrders.map(sort => (
        <MenuItem value={sort.value}  key={sort.value} onClick={() => onSelectSorting(sort.value)}>{sort.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector