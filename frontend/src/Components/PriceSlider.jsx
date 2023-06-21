import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./CSS/PriceSlider.module.css";

export default function PriceSlider({ setprice, price }) {
    console.log(price)
  let initial = price / 30;
  const [sliderValue, setSliderValue] = useState(initial ? initial : 50);

  return (
    <div>
      <Box className={styles.sliderContainer}>
        <Slider
          onChange={(val) => setSliderValue(val)}
          onChangeEnd={() => setprice(sliderValue * 30)}
          defaultValue={sliderValue}
        >
          <SliderMark className={styles.sliderMark} value={sliderValue}>
            {sliderValue * 30}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </div>
  );
}
