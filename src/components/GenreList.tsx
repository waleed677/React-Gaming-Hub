import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useFetchGenre from "../hooks/useFetchGenre";
import GetCroppedImage from "../utilities/GetCroppedImage";

const GenreList = () => {
  const { genre, errors, isLoading } = useFetchGenre();
  return (
    <List>
      {genre.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              src={GetCroppedImage(gen.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Text fontSize="18px">{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
