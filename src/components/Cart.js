import {
  Grid,
  Box,
  GridItem,
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
import { addToCart } from "../app/feature/storeSlice";
import { useSelector, useDispatch } from "react-redux";
const cart = [
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    category: "men's clothing",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    rating: { rate: 4.7, count: 500 },
    title: "Mens Cotton Jacket",
  },
];
const Cart = () => {
  // const { addToCart } = useSelector((store) => store.cart);
  const meet = useSelector((store) => store);
  console.log(meet);
  return (
    <Box
      w={{ sm: "80%", md: "50%", lg: "28%" }}
      bg="white"
      position="absolute"
      right={3}
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
          <Button>Clear Cart</Button>
        </Flex>
      </Center>
      {cart.map((product, index) => {
        return (
          <Flex key={index} justify="space-between" flexDirection="row" p={5}>
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
            <IconButton>
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
