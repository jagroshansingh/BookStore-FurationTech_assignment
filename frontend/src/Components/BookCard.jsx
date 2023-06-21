import { Button, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import styles from './CSS/BookCard.module.css'
import { useNavigate } from "react-router-dom";

export const BookCard = ({ bookDetails }) => {
  const navigate=useNavigate()
  const { image_url, book_name, cost } = bookDetails;

  const handleCart=()=>{

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
