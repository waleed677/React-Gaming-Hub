
import { Text } from '@chakra-ui/react'
import useFetchGames from '../hooks/useFetchGames'





const GameGrid = () => {

    const { games, errors } = useFetchGames()
    console.log(errors)

  return (
    <>
    
    {errors && <Text>404 not found</Text>}
    <ul>
        {games.map( game => (
            <li key={game.id}>{game.name}</li>
        ))}
    </ul>
    </>
  )
}

export default GameGrid