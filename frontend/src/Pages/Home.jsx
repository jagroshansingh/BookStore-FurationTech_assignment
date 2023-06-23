import React from "react";
import { Navbar } from "../Components/Navbar";
import { Carousel } from "../Components/Carousel";
import styles from "./CSS/Home.module.css"

export const Home = () => {
  const images = [
    "https://m.media-amazon.com/images/I/71W5IMP9-cL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81wpcDfs7dL._AC._SR360,460.jpg",
    "https://m.media-amazon.com/images/I/71vxH0htYvL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71QH6ZsXHKL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/719A0tVVdJL._AC._SR360,460.jpg",
    "https://m.media-amazon.com/images/I/91iX8t5GocL._AC._SR360,460.jpg",
  ];
  return (
    <div>
      <Navbar />
      <div className={styles.carousel}>
        <Carousel images={images} />
      </div>
    </div>
  );
};
