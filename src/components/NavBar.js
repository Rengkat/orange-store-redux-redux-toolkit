import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { openCart } from "../app/feature/storeSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isOpen, cart } = useSelector((store) => store.cart);
  const handleClick = () => {
    dispatch(openCart());
  };
  return (
    <Box bg="brand.100" overflow="hidden">
      <Flex
        w="80%"
        h="20vh"
        mx="auto"
        justifyContent="space-between"
        align="center"
      >
        <Box>
          <Link to={"/"}>
            <Heading as="h1" size="2xl" color="white" fontFamily="Arial">
              Fake Store
            </Heading>
          </Link>
        </Box>
        <Box onClick={handleClick} position="relative" cursor="pointer">
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
            rounded="md"
          >
            <Text fontSize={20}>{cart.length}</Text>
          </Flex>
        </Box>
        {/* <Cart /> */}
      </Flex>
    </Box>
  );
};

export default NavBar;
