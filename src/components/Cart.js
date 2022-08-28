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
  ScaleFade,
} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  clearCart,
  removeProduct,
  addQuantity,
  decreaseQuantity,
} from "../app/feature/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const { cart, isOpen } = useSelector((store) => store.cart);
  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
        0
      )
    );
  }, [cart]);
  // console.log(cart);
  return (
    <Box
      w={{ sm: "80%", md: "50%", lg: "30%" }}
      bg="white"
      position="absolute"
      opacity={isOpen ? "1" : "0"}
      right={2}
      top="60%"
      border="1px grey solid"
      boxShadow="md"
      zIndex={isOpen ? 2 : -2}
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
            <Box w="100%" pl={2}>
              <Text w="100%">{product.title.slice(0, 30)}...</Text>
              <Box display="flex">
                <Button onClick={() => dispatch(decreaseQuantity(product.id))}>
                  -
                </Button>
                <Text pt={2} ml={2}>
                  ${product.price} x {product.quantity}
                </Text>
                <Button
                  onClick={() => dispatch(addQuantity(product.id))}
                  ml={2}>
                  +
                </Button>
              </Box>
            </Box>
            <Box p={3}>
              <Text>${product.price * product.quantity}</Text>
            </Box>
            <IconButton onClick={() => dispatch(removeProduct(product.id))}>
              <Icon color="gray" as={DeleteIcon} />
            </IconButton>
          </Flex>
        );
      })}
      <Box>
        <Center>
          {cart.length > 0 && (
            <Heading as="h3" size="md" p={2}>
              Your Total: ${total}
            </Heading>
          )}
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
