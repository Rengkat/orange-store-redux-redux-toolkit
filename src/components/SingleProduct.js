import { Button, Box, Image, Flex, Text, Heading } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../app/api";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../app/feature/storeSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const {
    data: product,
    isFetching,
    isLoading,
    isError,
    isSuccess,
  } = useGetSingleProductQuery(productId);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Box mt={5}>
      {isLoading ? (
        <Loading />
      ) : (
        <Flex
          w={{ base: "90%", md: "60%" }}
          mx="auto"
          justify="center"
          alignContent="center"
          direction={{
            base: "column",
            // md: "column",
            md: "row",
            // xl: "repeat(4, 1fr)",
          }}>
          <Image
            src={product?.image}
            m="auto"
            boxSize={{ base: "60%", md: "30%" }}
          />
          <Box p={5}>
            <Heading size="lg" py={2}>
              {product?.title}
            </Heading>
            <Heading size="md">${product?.price}</Heading>
            <Text>{product?.category} Category</Text>
            <Text>({product?.rating.count}) Comments</Text>
            <Text>{product?.description}</Text>
            <Flex justify="space-between" my={5} w={{ base: "90%", md: "50%" }}>
              <Button
                onClick={() => handleAddToCart(product)}
                bg="brand.100"
                color="white">
                Add to Cart
              </Button>
              <Button bg="brand.100" color="white">
                <Link to="/">Back to Shopping</Link>
              </Button>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default SingleProduct;

// {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//         "rate": 4.1,
//         "count": 259
//     }
// }
