import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown} from "react-icons/bs";
import useFetchPlatforms from "../hooks/useFetchPlatforms";
import { Platform } from "../hooks/useFetchGames";

interface Props {
    onSelectPlatform : (Platform : Platform) => void
    selectedPlatform : Platform | null
}

const PlatformMenu = ({selectedPlatform, onSelectPlatform} : Props) => {


    const { data  } = useFetchPlatforms()
  return (
    <Menu>
      <MenuButton marginBottom={3} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map(platform => (
        <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
