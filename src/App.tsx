import { Box } from "@chakra-ui/react";
import Nav from "./Major Components/Nav";
import { colors } from "./Variables/variables";
function App() {
  return (
    <Box backgroundColor={colors.bgColor}>
      <Nav />
    </Box>
  );
}

export default App;
