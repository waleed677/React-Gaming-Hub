import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useFetchGenre";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useFetchGames";

function App() {


  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform , setselectedPlatform] = useState<Platform | null>(null)

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
            <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem marginTop={10} area="main">
          <PlatformMenu selectedPlatform = {selectedPlatform} onSelectPlatform={(platform) => setselectedPlatform(platform) } />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform = {selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
