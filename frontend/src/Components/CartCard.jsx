import axios from "axios";
import React from "react";
import styles from "./CSS/CartCard.module.css";
import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const CartCard = ({ bookId,handleDelete }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/books/singleBook`,
      params: { bookId },
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Flex className={styles.container}>
        <Box>
          <Stack direction="row" spacing="5" width="full">
            <Image src={data?.image_url} alt={"Book_image"} />

            <Stack className={styles.bookInfo}>
              <Text>{data?.book_name}</Text>
              <Text>{data?.author}</Text>
            </Stack>
          </Stack>
        </Box>

        <Flex>
          <Text>₹{data?.cost}</Text>
          <CloseButton onClick={()=>handleDelete(bookId)} />
        </Flex>
      </Flex>
    </div>
  );
};
