import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Cart from "./Cart";
// import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box bg="brand.100">
      <Flex
        w="80%"
        h="20vh"
        mx={"auto"}
        justifyContent="space-between"
        align="center">
        <Box>
          <Heading as="h1" size="2xl" color="white" fontFamily={"Arial"}>
            Fake Store
          </Heading>
        </Box>
        <Box position="relative">
          <Icon
            fontSize={35}
            cursor="pointer"
            color="white"
            as={ShoppingBagIcon}
          />
          <Flex
            w={8}
            h={8}
            bg="white"
            position="absolute"
            top={-2}
            right={-4}
            align="center"
            justify="center"
            rounded="md">
            <Text fontSize={20}>10</Text>
          </Flex>
        </Box>
        {/* <Cart /> */}
      </Flex>
    </Box>
  );
};

export default NavBar;
