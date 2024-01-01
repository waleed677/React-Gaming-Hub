import { HStack, Image, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={logo} boxSize='80px'/>
        <Switch isChecked = { colorMode === 'dark'} colorScheme='green' onChange={toggleColorMode}>{colorMode}</Switch>
    </HStack>
    </>
  )
}

export default Navbar