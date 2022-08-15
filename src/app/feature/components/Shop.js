import React, { useEffect, useState } from "react";
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
import { usegetFetchProductsQuery } from "../../api";

const Shop = () => {
  const { data, error, isLoading, isSuccess } = usegetFetchProductsQuery();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <>
      <Box w={"90%"} mx="auto" my={10} pos="absolute" left={0} right={0}>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {products.map((product) => {
            return (
              <GridItem style={{ border: "solid black 0.5px" }} rounded="lg">
                <Flex justifyContent="center" alignItems="center">
                  <Image
                    src={product.image}
                    boxSize="200px"
                    objectFit="contain"
                  />
                </Flex>
                <Center w={"60%"} mx="auto" my={2} fontStyle="bold">
                  <Text>{product.title}</Text>
                </Center>
                <Center w={"60%"} mx="auto" my={2}>
                  <Text>${product.price}</Text>
                </Center>
                <Flex justifyContent="center" alignItems="center" pb={10}>
                  <Button w="60%" bg="brand.100" color="white">
                    Add to Cart
                  </Button>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      {/* <Box bg="brand.100" h="20vh" pos="absolute" bottom={0} right0></Box> */}
    </>
  );
};

export default Shop;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
