import React from 'react'
import { Games } from '../hooks/useFetchGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'


interface Props {
    game : Games
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading size='lg'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard