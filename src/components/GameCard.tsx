import React from 'react'
import { Games } from '../hooks/useFetchGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import GetCroppedImage from '../utilities/GetCroppedImage'
import PlatformIconsList from './PlatformIconsList'



interface Props {
    game : Games
}

const GameCard = ({game} : Props) => {


 

  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={GetCroppedImage(game.background_image)}/>
      <CardBody>
        <Heading size='md' marginBottom={1}>{game.name}</Heading>
        <PlatformIconsList  platforms = {game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  )
}

export default GameCard