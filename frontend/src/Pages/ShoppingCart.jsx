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
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import styles from "./CSS/ShoppingCart.module.css";
import {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const toast = useToast();
  let ss = JSON.parse(sessionStorage.getItem("Auth"));

  const FetchUser = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/single`,
      params: { userID: ss?.userID },
    })
      .then((res) => {
        // console.log(res.data);
        setCartItems(res.data.cart);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id,price) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL}/books/cart/delete`,
      params: { userID: ss?.userID, productID: id },
    })
      .then((res) => {
        toast({
          position: "top",
          title: res.data,
          status: "success",
          duration: 2000,
        });
        FetchUser();
        setTotalPrice(prev=>prev-price)
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
            {cartItems?.length === 0 && (
              <Box className={styles.emptyCart}>
                <Heading>Cart is Empty</Heading>
              </Box>
            )}

            {cartItems?.map((item) => (
              <div key={item}>
                <CartCard
                  bookId={item}
                  handleDelete={handleDelete}
                  setTotalPrice={setTotalPrice}
                />
                <Divider />
              </div>
            ))}
          </Stack>
        </Stack>

        <Stack className={styles.orderSummary}>
          <Stack boxShadow="md">
            <Heading>Order Summary</Heading>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Subtotal</Td>
                    <Td isNumeric>{totalPrice}</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping+Tax</Td>
                    <Td isNumeric>₹ 0</Td>
                  </Tr>
                  <Tr>
                    <Td>Discount</Td>
                    <Td isNumeric>0%</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>
                      <Heading>Total</Heading>
                    </Th>
                    <Th isNumeric>
                      <Heading>{totalPrice}</Heading>
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>

            <Link to="/checkout">
              {" "}
              <Button isDisabled={totalPrice===0}>Checkout</Button>{" "}
            </Link>
          </Stack>
          <HStack>
            <p>or</p>
            <Link to="/booklisting">
              <Text className={styles.addMore}>Get more books...</Text>
            </Link>
          </HStack>
        </Stack>
      </HStack>
    </div>
  );
};
