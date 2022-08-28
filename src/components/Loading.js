import { Box, Flex, Heading } from "@chakra-ui/react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box h="100vh" mt={5}>
      <Flex justify="center" alignItems="center">
        <Bars
          height="20vh"
          width="50%"
          radius="20"
          color="#FF6600"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </Flex>
    </Box>
  );
};

export default Loading;
