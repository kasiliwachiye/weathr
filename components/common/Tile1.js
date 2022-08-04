import { Box, Spacer, Text, View, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

const Tile1 = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["lightBlue.200", "violet.500"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="6"
      rounded="xl"
      _text={{
        color: "warmGray.50",
        textAlign: "center",
      }}
      width="90%"
    >
      <View
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <VStack space={4} alignItems="center">
          {/*icon goes here  */}
          <Feather name="sun" size={24} color="white" />
          <Text fontSize="xl" color={["warmGray.50", "warmGray.50"]}>
            {/* Weather goes here */}
            Sunny
          </Text>
        </VStack>
        <Spacer />
        <VStack space={1} alignItems="center">
          <Text fontSize="7xl" color="white" fontWeight="800">
            {/* temp goes here */}
            29°C
          </Text>
          <Text fontSize="md" color="white">
            {/* feels like goes here */}
            Feels like 29°C
          </Text>
        </VStack>
      </View>
    </Box>
  );
};

export default Tile1;
