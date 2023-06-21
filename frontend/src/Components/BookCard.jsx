import { Button, Card, CardBody, CardFooter, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from './CSS/BookCard.module.css'

export const BookCard = ({ bookDetails }) => {
  console.log(bookDetails);
  const { image, title, price } = bookDetails;
  return (
    <div className={styles.Card}>
        <Image src={image} alt="Book Image"/>
        <Stack>
        <Heading size={'xs'}>{title}</Heading>
        <Heading size={'md'}>{price}</Heading>
        <Button>Add to Cart</Button>
        </Stack>
    </div>
  );
};
