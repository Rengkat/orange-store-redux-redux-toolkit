import {
  Box,
  Image,
  Button,
  Flex,
  Text,
  Center,
  IconButton,
  Icon,
  Heading,
} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import { clearCart, removeProduct } from "../app/feature/storeSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const handleClear = () => {
    dispatch(clearCart());
  };

  console.log(cart);
  return (
    <Box
      w={{ sm: "80%", md: "50%", lg: "30%" }}
      bg="white"
      position="absolute"
      right={2}
      top="60%"
      border="1px grey solid"
      boxShadow="md"
      zIndex={2}
      //   display="none"
      rounded={7}>
      <Center my={5}>
        <Flex
          w="90%"
          justify="space-between"
          p={3}
          borderBottom="1px solid grey">
          <Heading as="h5" size="lg">
            Cart
          </Heading>
          <Button onClick={handleClear}>Clear Cart</Button>
        </Flex>
      </Center>
      {cart.length === 0 && (
        <Heading as="h3" size="md" py={5}>
          <Center>Your cart is empty</Center>
        </Heading>
      )}
      {cart.map((product) => {
        return (
          <Flex
            key={product.id}
            justify="space-between"
            flexDirection="row"
            p={5}>
            <Box>
              <Image
                src={product.image}
                alt="image"
                boxSize="60px"
                w="80px"
                rounded="md"
                // objectFit="cover"
              />
            </Box>
            <Box w="100%" p={2}>
              <Text w="100%">{product.title.slice(0, 30)}...</Text>
              <Text>$135 x 5</Text>
            </Box>
            <Box p={3}>
              <Text>$635</Text>
            </Box>
            <IconButton onClick={() => dispatch(removeProduct(product.id))}>
              <Icon color="gray" as={DeleteIcon} />
            </IconButton>
          </Flex>
        );
      })}
      <Box>
        <Center>
          <Heading as="h3" size="md" p={2}>
            Your Total: $1235
          </Heading>
        </Center>
        <Center pt={2} pb={7}>
          <Button py={7} bg="brand.100" color="white" w="80%">
            Checkout
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Cart;
