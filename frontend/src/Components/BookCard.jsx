import { Button, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import styles from './CSS/BookCard.module.css'

export const BookCard = ({ bookDetails }) => {
  const { image_url, book_name, cost } = bookDetails;
  return (
    <div className={styles.Card}>
        <Image src={image_url} alt="Book Image"/>
        <Stack>
        <Heading size={'xs'}>{book_name}</Heading>
        <Heading size={'md'}>₹{cost}</Heading>
        <Button>Add to Cart</Button>
        </Stack>
    </div>
  );
};
