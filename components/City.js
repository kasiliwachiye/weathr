import {
  StatusBar,
  View,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import Tile1 from "./common/Tile1";
import Tile2 from "./common/Tile2";

const City = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ width: windowWidth, height: windowHeight }}>
        <VStack space={4} alignItems="center">
          <Tile1 />
          <Tile2 />
        </VStack>
      </View>
    </>
  );
};

export default City;
