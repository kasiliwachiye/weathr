import {NativeBaseProvider, extendTheme} from "native-base";
import {LinearGradient} from 'expo-linear-gradient';

import City from "./components/City";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <City />
    </NativeBaseProvider>
  );
}
