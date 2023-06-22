import axios from "axios";
import React from "react";
import { CartCard } from "../Components/CartCard";
import { Box, Button, Divider, HStack, Heading, Stack, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import styles from "./CSS/ShoppingCart.module.css";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const toast=useToast()
  let { userID } = JSON.parse(sessionStorage.getItem("Auth"));

  const FetchUser = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/single`,
      params: { userID },
    })
      .then((res) => {
        // console.log(res.data);
        setCartItems(res.data.cart);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL}/books/cart/delete`,
      params: { userID, productID: id },
    })
      .then((res) => {
        toast({
          position:'top',
          title:res.data,
          status:'success',
          duration:2000
        })
        FetchUser()
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    FetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <HStack className={styles.cartContainer}>
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
                <CartCard bookId={item} handleDelete={handleDelete} />
                <Divider />
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
    </div>
  );
};
