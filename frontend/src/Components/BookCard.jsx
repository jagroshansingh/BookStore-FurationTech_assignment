import { Button, Heading, Image, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import styles from './CSS/BookCard.module.css'
import axios from "axios";

export const BookCard = ({ bookDetails }) => {
  const toast=useToast()
  // console.log(bookDetails)
  const {_id, image_url, book_name, cost } = bookDetails;

  let Auth=JSON.parse(sessionStorage.getItem('Auth'))||null
  // console.log(Auth)

  const handleCart=()=>{
    if (Auth?.token) {
      axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL}/books/cart/add`,
        data:{productID:_id,userID:Auth.userID},
        headers: {
          authorization: Auth.token,
        },
      })
        .then((res) =>
          toast({
            position: "top",
            title: res.data
              ? "Item added to cart"
              : "Item already present in the cart",
            status: res.data ? "success" : "warning",
            duration: 2000,
          })
        )
        .catch((err) => console.log(err));
    } else {
      toast({
        position: "top",
        title: "Kindly Sign-In/Sign-UP first",
        status: "warning",
        duration: 2000,
      });
    }
  }
  
  return (
    <div className={styles.Card}>
        <Image src={image_url} alt="Book Image"/>
        <Stack>
        <Heading size={'xs'}>{book_name}</Heading>
        <Heading size={'md'}>₹{cost}</Heading>
        <Button onClick={handleCart}>Add to Cart</Button>
        </Stack>
    </div>
  );
};
