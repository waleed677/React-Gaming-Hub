import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useFetchGenre, { Genre } from "../hooks/useFetchGenre";
import GetCroppedImage from "../utilities/GetCroppedImage";


interface Props {
    onSelectedGenre : (genre: Genre ) => void
    selectedGenre? : Genre | null
}

const GenreList = ({ selectedGenre , onSelectedGenre} : Props) => {
  const { data, errors, isLoading} = useFetchGenre();

    if(errors) return;

    if(isLoading) return <Spinner/>

  return (
    <>
    <Heading fontSize='2xl'  marginTop={9} marginBottom={3}>Genres</Heading>
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              src={GetCroppedImage(gen.image_background)}
              boxSize="32px"
              borderRadius="8px"
              objectFit="cover"
            />
            <Button textAlign='left' whiteSpace='no-wrap' fontWeight={selectedGenre?.id === gen.id ? 'bold' : 'normal'}  onClick={() => onSelectedGenre(gen)} fontSize="18px" variant='link'>{gen.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
