import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'

function App() {

  return (
    <>
        <Grid templateAreas={{
          base : `'nav' 'main'`,
          lg : `'nav nav' 'aside main'`
        }}>
          <GridItem  area='nav'>
            <Navbar/>
          </GridItem>
          <Show above='lg'>
          <GridItem area='aside'>Aside</GridItem>
          </Show>
          <GridItem marginTop={20} area='main'><GameGrid/></GridItem>
        </Grid>
    </>
  )
}

export default App
