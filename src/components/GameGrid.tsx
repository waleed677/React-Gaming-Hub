import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames, { Platform } from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useFetchGenre";

interface Props {
  selectedGenre : Genre | null
  selectedPlatform : Platform | null
}


const GameGrid = ( {selectedPlatform, selectedGenre}:Props) => {
  const { data, errors, isLoading } = useFetchGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8];

  return (
    <>
      {errors && <Text>404 not found</Text>}
      <SimpleGrid
        columns={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={3}
      >
        {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}><GameCardSkelton /> </GameCardContainer>)}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
