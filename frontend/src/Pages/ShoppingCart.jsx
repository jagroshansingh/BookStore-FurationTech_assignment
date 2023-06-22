import axios from "axios";
import React from "react";
import { CartCard } from "../Components/CartCard";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import styles from "./CSS/ShoppingCart.module.css";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    let { userID } = JSON.parse(sessionStorage.getItem("Auth"));
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/single`,
      params: { userID },
    })
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data.cart);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <Box className={styles.cartContainer}>
        <HStack>
          <Stack>
            <Heading>Shopping Cart</Heading>

            <Stack boxShadow="md" className={styles.shoppingCart}>
              {cartItems.length == 0 && (
                <Box className={styles.emptyCart}>
                  <Heading>Your Cart is Empty</Heading>
                </Box>
              )}

              {cartItems?.map((item) => (
                <div key={item}>
                  <CartCard bookId={item} />
                  <Divider/>
                </div>
              ))}
            </Stack>
          </Stack>

          <Stack boxShadow="md" className={styles.orderSummary}>
            <Heading>Order Summary</Heading>

            <Link to="/checkout">
              {" "}
              <Button>Checkout</Button>{" "}
            </Link>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
};
