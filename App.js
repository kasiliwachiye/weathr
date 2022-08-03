import {NativeBaseProvider, extendTheme} from "native-base";

import Cities from "./components/Cities";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Cities />
    </NativeBaseProvider>
  );
}
