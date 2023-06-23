import { Flex, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import styles from "./CSS/Carousel.module.css"

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigate=useNavigate()

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carouselContainer}>
      <Flex>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        />
        <Flex className={styles.imageContainer}>
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={()=>navigate('/booklisting')}
            />
          ))}
        </Flex>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNextClick}
          disabled={currentIndex === images.length - 4}
        />
      </Flex>
    </div>
  );
};
