
import { SimpleGrid, Text } from '@chakra-ui/react'
import useFetchGames from '../hooks/useFetchGames'
import GameCard from './GameCard'





const GameGrid = () => {

    const { games, errors } = useFetchGames()

  return (
    <>
    
    {errors && <Text>404 not found</Text>}
    <SimpleGrid  columns={{
      sm:2, md:2, lg:3, xl:4
    }} spacing={10}>
        {games.map( game => (
            <GameCard game = {game}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid