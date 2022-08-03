import { Center } from "native-base";

const CityTile = () => {
  return (
    <Center
      w="64"
      h="10"
      _dark={{
        bg: "indigo.500",
      }}
      _light={{
        bg: "indigo.400",
      }}
      rounded="md"
      shadow={3}
    >
      {}
    </Center>
  );
};

export default CityTile;
