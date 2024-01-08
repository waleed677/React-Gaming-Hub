import { useState } from "react";
import "./App.css";
import {  Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useFetchGenre";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useFetchGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
    genre : Genre,
    platform : Platform,
    ordering : string,
    search : string
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  

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
          <Navbar searchQuery={(search) =>setGameQuery({...gameQuery, search})}  />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" marginTop={10} paddingX='10px'>
            <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery( {...gameQuery , genre})} />
          </GridItem>
        </Show>
        <GridItem marginTop={10} area="main">
          <HStack marginBottom={3}>
          <PlatformMenu selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => setGameQuery( {...gameQuery , platform}) } />
          <SortSelector selectedSortOrder={gameQuery.ordering} onSelectSorting={(ordering) => setGameQuery({...gameQuery , ordering})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
