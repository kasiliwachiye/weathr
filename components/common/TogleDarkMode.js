import { HStack, Switch, Text, useColorMode } from "native-base";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" py={4}>
      <Text>🌙</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>🔆</Text>
    </HStack>
  );
}

export default ToggleDarkMode;