import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, errors, isLoading } = useFetchGames();
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
        spacing={10}
      >
        {isLoading && skeletons.map((skeleton) => <GameCardContainer><GameCardSkelton /></GameCardContainer>)}

        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
