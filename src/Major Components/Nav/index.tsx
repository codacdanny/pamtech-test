import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { colors } from "../../Variables/variables";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import calender from "../../assets/calendar.svg";
import services from "../../assets/category-2.svg";
import customers from "../../assets/category-3.svg";
import NavButton from "../../Minor Components/NavButton";

const Nav = () => {
  return (
    <Box height="100px" backgroundColor={colors.primaryColor} paddingY="1rem">
      <Flex alignItems="center">
        <Box>
          <Image src={logo} alt="logo" />
        </Box>
        <Flex>
          <NavButton imageUrl={home} title="Dashboard" href="#" />
          <NavButton imageUrl={calender} title="Bookings" href="#" />
          <NavButton imageUrl={customers} title="Customers" href="#" />
          <NavButton imageUrl={services} title="Services" href="#" />
        </Flex>
        <Box>
          <Button
            variant="ghost"
            colorScheme="transparent"
            outline="2px solid #eee"
            iconSpacing={5}
            rightIcon={
              <AiOutlineDown
                size="12px"
                fontWeight={700}
                color={colors.headerColor}
              />
            }>
            <Flex flexDirection="column" textAlign="left">
              <Text fontSize=".9rem" color={colors.headerColor}>
                Buukmenow Demo
              </Text>
              <Text fontSize=".7rem" color={colors.textColor}>
                Buukmenow@gmail.com{" "}
              </Text>
            </Flex>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
