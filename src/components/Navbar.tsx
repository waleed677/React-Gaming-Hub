import { HStack, Image, Switch, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './SearchInput';

interface Props {
  searchQuery : (searchText : string) => void
}

const Navbar = ({searchQuery} : Props) => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <HStack  padding='10px'>
        <Image src={logo} boxSize='80px'/>
        <SearchInput onSearch={(query) =>searchQuery(query)}/>
        <Switch isChecked = { colorMode === 'dark'} colorScheme='green' onChange={toggleColorMode} whiteSpace={'nowrap'} >{colorMode}</Switch>
    </HStack>
    </>
  )
}

export default Navbar