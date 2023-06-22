import React from "react";
import { Navbar } from "../Components/Navbar";
import { Carousel } from "../Components/Carousel";
import styles from "./CSS/Home.module.css"

export const Home = () => {
  const images = [
    "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71W5IMP9-cL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71vxH0htYvL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71QH6ZsXHKL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71B4h-dSVzL._AC_UY327_FMwebp_QL65_.jpg",
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
