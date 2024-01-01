import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <>
        <Grid templateAreas={{
          base : `'nav' 'main'`,
          lg : `'nav nav' 'aside main'`
        }}>
          <GridItem  bg= 'orange' area='nav nav'>Navbar</GridItem>
          <Show above='lg'>
          <GridItem  bg= 'red' area='aside'>Aside</GridItem>
          </Show>
          <GridItem  bg= 'purple' area='main'>Main</GridItem>
        </Grid>
    </>
  )
}

export default App
