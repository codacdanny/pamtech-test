import { Box, Flex, Image } from "@chakra-ui/react";
import { colors } from "../../Variables/variables";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import calender from "../../assets/calendar.svg";
import services from "../../assets/category-2.svg";
import customers from "../../assets/category-3.svg";
import NavButton from "../../Minor Components/NavButton";
const Nav = () => {
  return (
    <Box height="100px" backgroundColor={colors.primaryColor}>
      <Flex>
        <Image src={logo} />
        <Flex>
          <NavButton imageUrl={home} title="Dashboard" href="#" />
          <NavButton imageUrl={calender} title="Bookings" href="#" />
          <NavButton imageUrl={customers} title="Customers" href="#" />
          <NavButton imageUrl={services} title="Services" href="#" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
