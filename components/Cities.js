import { Center, NativeBaseProvider, VStack } from "native-base";
import CityTile from "./common/CityTile";

import ToggleDarkMode from "./common/TogleDarkMode";

export default function App() {

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <ToggleDarkMode />
        <VStack space={4} alignItems="center">
          <CityTile />          
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
