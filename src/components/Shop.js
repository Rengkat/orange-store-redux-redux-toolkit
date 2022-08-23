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
import { useGetFetchProductsQuery } from "../app/api";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Shop = () => {
  const { data, isFetching, isError, isSuccess } = useGetFetchProductsQuery();

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Box w={"90%"} mx="auto" my={10} pos="absolute" left={0} right={0}>
          <Grid
            templateColumns={{
              // bas: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={5}>
            {data?.map((product, index) => {
              return (
                <GridItem
                  key={product.id}
                  style={{ border: "solid black 0.5px" }}
                  rounded="lg">
                  <Flex justifyContent="center" alignItems="center">
                    <Link to={`cart/${product.id}`}>
                      <Image
                        src={product.image}
                        boxSize="200px"
                        objectFit="contain"
                      />
                    </Link>
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
      )}
      {/* <Box bg="brand.100" h="20vh" pos="absolute" bottom={0} right0></Box> */}
    </>
  );
};

export default Shop;