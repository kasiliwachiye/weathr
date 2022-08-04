import {
  Center,
  StatusBar,
  View,
  ScrollView,
  Text,
  Heading,
  Input,
  VStack,
  HStack,
  Spacer,
  Icon,
} from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ToggleDarkMode from "./common/TogleDarkMode";

export default function Cities() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const data = [
    {
      id: 1,
      name: "Nairobi",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 2,
      name: "Mombasa",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 3,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 4,
      name: "Nakuru",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 5,
      name: "Kakamega",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 6,
      name: "Kisii",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 7,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 8,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 9,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 10,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 11,
      name: "Nairobi",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 12,
      name: "Mombasa",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 13,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 14,
      name: "Nakuru",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 15,
      name: "Kakamega",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 16,
      name: "Kisii",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 17,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 18,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 19,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
    {
      id: 20,
      name: "Kisumu",
      country: "Kenya",
      temp: "20",
      icon: "01d",
    },
  ];

  const handleFavorite = () => {};

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={1}
      flex="1"
      safeAreaTop
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ width: windowWidth, height: windowHeight }}>
        <ScrollView>
          <Heading py={2} px={6} style={{ fontSize: 20, fontWeight: "bold" }}>
            <Text>WeathR 🔆</Text>
          </Heading>
          <View p={6}>
            <Input placeholder="Search" />
            <ToggleDarkMode />
          </View>
          <VStack space={2} p={2}>
            {data.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  console.log("item", item);
                }}
              >
                <View key={item.id} style={styles.cityItem}>
                  <HStack justifyContent="space-between" alignItems="center">
                    <VStack>
                      <Text>{item.name}</Text>
                      <Text>{item.temp}°C</Text>
                    </VStack>
                    <Spacer />
                    <MaterialIcons
                      name="favorite-outline"
                      size={24}
                      _dark={{ bg: "blueGray.900" }}
                      _light={{ bg: "blueGray.50" }}
                      onClick={handleFavorite}
                    />
                  </HStack>
                </View>
              </TouchableOpacity>
            ))}
          </VStack>
        </ScrollView>
      </View>
    </Center>
  );
}

const styles = StyleSheet.create({
  cityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
