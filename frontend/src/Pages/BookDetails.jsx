import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, Stack, useToast } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import styles from "./CSS/BookDetails.module.css";

export const BookDetails = () => {
  const [bookData, setBookData] = React.useState({});
  const { id } = useParams();
  const toast=useToast()
  const navigate=useNavigate()

  let Auth=JSON.parse(sessionStorage.getItem('Auth'))||null

  const handleCart=()=>{
    if (Auth?.token) {
      axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL}/books/cart/add`,
        data:{productID:bookData?._id,userID:Auth.userID},
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

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/books/singleBook`,
      params: { bookId: id },
    })
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <Navbar />
      <Stack className={styles.bookContainer}>
        <Flex>
          <Image src={bookData?.image_url} alt="Book Image" />
          <Box className={styles.bookDetails}>
            <Heading>{bookData?.book_name}</Heading>
            <Heading size={"md"}>Author: {bookData?.author}</Heading>
            <Heading size={"md"}>Genre: {bookData?.genre}</Heading>
            <Heading size={"md"}>Edition: {bookData?.edition}</Heading>
            <Heading size={"md"}>Publisher: {bookData?.publisher}</Heading>
            <Heading size={"md"}>Price: ₹{bookData?.cost}</Heading>
          </Box>
        </Flex>
        <Stack className={styles.buttonGroup}>
          <Button colorScheme="blue" onClick={handleCart}>Add to Cart</Button>
          <Button onClick={()=>navigate('/booklisting')}>Go Back</Button>
        </Stack>
      </Stack>
    </div>
  );
};
