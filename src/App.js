import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import { Box } from "@chakra-ui/react";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Box pos="relative">
          <NavBar />
          <Cart />
        </Box>
        {/* <Shop /> */}
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="cart/:productId" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
