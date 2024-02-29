import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { colors } from "../../Variables/variables";
import SearchBar from "../../Minor Components/Search";
import { BsFileText } from "react-icons/bs";
const Body = () => {
  return (
    <Box
      backgroundColor={colors.bgColor}
      color={colors.textColor}
      height="100svh">
      <Box borderBottom={` 3px solid ${colors.bgColor}`}>
        <Flex flexDirection="column">
          <Heading color={colors.headerColor}>Customers</Heading>
          <Text>See all your customers in one place </Text>
        </Flex>
        <Flex>
          <Button
            borderRadius="0px"
            _hover={{
              borderBottom: `2px solid ${colors.headerColor} `,
              color: `${colors.headerColor}`,
            }}
            cursor="pointer"
            as="a"
            variant="ghost"
            colorScheme="transparent">
            Customer Log
          </Button>
          <Button
            borderRadius="0px"
            _hover={{
              borderBottom: `2px solid ${colors.headerColor} `,
              color: `${colors.headerColor}`,
            }}
            cursor="pointer"
            as="a"
            variant="ghost"
            colorScheme="transparent">
            Campaigns
          </Button>
        </Flex>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" padding="30px">
        <SearchBar />
        <Button
          _active={{
            transform: "scale(.85)",
            transition: "all .2s ease-in-out",
          }}
          leftIcon={<BsFileText size="18" color={`${colors.primaryColor}`} />}
          colorScheme="transparent"
          borderRadius="13px"
          padding="25px"
          backgroundColor={`${colors.buttonBgColor}`}>
          Create a campaign
        </Button>
      </Flex>
    </Box>
  );
};

export default Body;
