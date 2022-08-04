import { Center, Spacer, Text, View, VStack } from "native-base";

const Tile2 = () => {
  return (
    <VStack space={4} alignItems="center" width="90%" py={5}>
      <Center
        w="100%"
        h="20"
        bg="white"
        rounded="xl"
        shadow={3}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        px={4}
      >
        <View>
          <VStack space={1} alignItems="center">
            <Text fontSize={14} fontWeight="bold" color="blueGray.300">
              Wind
            </Text>
            <Text fontSize={14} fontWeight="bold" color="black">
            {/* wind speed goes her */}
              33 m/h
            </Text>
          </VStack>
        </View>
        <Spacer />
        <View>
          <VStack space={1} alignItems="center">
            <Text fontSize={14} fontWeight="bold" color="blueGray.300">
              Humidity
            </Text>
            <Text fontSize={14} fontWeight="bold" color="black">
            {/* humidity goes here */}
              23 km
            </Text>
          </VStack>
        </View>
        <Spacer />
        <View>
          <VStack space={1} alignItems="center">
            <Text fontSize={14} fontWeight="bold" color="blueGray.300">
              Visibility
            </Text>
            <Text fontSize={14} fontWeight="bold" color="black">
            {/* visibility goes here */}
              64%
            </Text>
          </VStack>
        </View>
      </Center>
    </VStack>
  );
};

export default Tile2;
