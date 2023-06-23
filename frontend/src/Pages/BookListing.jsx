import React from "react";
import { SidePanel } from "../Components/SidePanel";
import { BookCard } from "../Components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BookList } from "../Redux/action";
import { Box, Heading } from "@chakra-ui/react";
import styles from "./CSS/BookListing.module.css";
import { Navbar } from "../Components/Navbar";
import { useLocation, useSearchParams } from "react-router-dom";

export const BookListing = () => {
  const [searchParams]=useSearchParams()
  const location=useLocation();
  const { booklist, isLoading } = useSelector((store) => store);
  // const [booklist,setBookList]=React.useState([])
  const dispatch = useDispatch();
  console.log(booklist);

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/books`,
      params:{
        genre:searchParams.getAll('genre'),
        edition:searchParams.getAll('edition'),
        price:searchParams.get('price'),
        sort:searchParams.get('sort')
      }
    })
      .then((res) => {
        console.log('apiCall',res.data);
        dispatch(BookList(res.data));
        // setBookList(res.data)
      })
      .catch((err) => console.log(err));
  }, [location.search]);
  return (
    <div className={styles.BookListingContainer}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.sidePanel}>
        <SidePanel />
      </div>
      <div className={styles.mainContent}>
        {isLoading ? (
        <Heading>Loading...</Heading>
      ) : booklist?.length === 0||!booklist ? (
        <Heading>No data available</Heading>
      ) : (
        <Box className={styles.mainPanel}>
          {booklist?.map((book) => (
            <BookCard key={book._id} bookDetails={book} />
          ))}
        </Box>
      )}
      </div>
    </div>
  );
};
