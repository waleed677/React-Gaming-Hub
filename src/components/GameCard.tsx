import { Games } from '../hooks/useFetchGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import GetCroppedImage from '../utilities/GetCroppedImage'
import PlatformIconsList from './PlatformIconsList'



interface Props {
    game : Games
}

const GameCard = ({game} : Props) => {


 

  return (
    <Card >
      <Image src={GetCroppedImage(game.background_image)}/>
      <CardBody>
        <PlatformIconsList  platforms = {game.parent_platforms.map(p => p.platform)}/>
        <Heading fontSize='2xl' marginTop={1}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard