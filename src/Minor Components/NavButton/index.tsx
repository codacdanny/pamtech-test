import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../Variables/variables";

interface NavButtonProps {
  imageUrl: string;
  title: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ imageUrl, title, href }) => {
  return (
    <Button
      as="a"
      variant="ghost"
      colorScheme="transparent"
      href={href}
      textDecoration="none"
      _active={{
        transform: "scale(.85)",
        transition: "all .2s ease-in-out",
      }}>
      <Flex
        padding="8px 12px 8px 12px"
        borderRadius="500px"
        fontWeight="500"
        color={colors.textColor}
        gap="8px"
        _hover={{
          backgroundColor: colors.navButtonBg,
          color: colors.headerColor,
        }}>
        <Image src={imageUrl} alt="icon" />
        <Text>{title}</Text>
      </Flex>
    </Button>
  );
};

export default NavButton;
