import { Box, Button, Tooltip, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={{
        base: "none",
        sm: "none",
        md: "inline-block",
        lg: "inline-block",
        xl: "inline-block",
      }}
    >
      <Button variant={"ghost"} onClick={toggleColorMode} alignItems={"center"}>
        {colorMode === "light" ? (
          <Tooltip label={"Dark Mode"}>
            <MoonIcon />
          </Tooltip>
        ) : (
          <Tooltip label={"Light Mode"}>
            <SunIcon />
          </Tooltip>
        )}
        {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
      </Button>
    </Box>
  );
};

export default ColorModeButton;
