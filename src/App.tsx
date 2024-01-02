import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base : '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" marginTop={10} paddingX='10px'>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem marginTop={10} area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
