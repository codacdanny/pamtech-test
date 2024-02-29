import { Box } from "@chakra-ui/react";
import Nav from "./Major Components/Nav";
import { colors } from "./Variables/variables";
import Body from "./Major Components/Body";
function App() {
  return (
    <Box backgroundColor={colors.bgColor}>
      <Nav />
      <Body />
    </Box>
  );
}

export default App;
