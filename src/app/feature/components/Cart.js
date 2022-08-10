import {
  Grid,
  Box,
  GridItem,
  Image,
  Button,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
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
  return (
    <Box
      h="70vh"
      w="30%"
      bg="brand.100"
      position="absolute"
      right={3}
      top="35%"
      boxShadow="md"
      zIndex="200"
      //   display="none"
      rounded={7}>
      {/* {cart.map((product) => {})} */}
    </Box>
  );
};

export default Cart;
