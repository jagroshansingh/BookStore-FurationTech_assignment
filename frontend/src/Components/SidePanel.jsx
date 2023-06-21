import { Checkbox, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/SidePanel.module.css";
import { useSearchParams } from "react-router-dom";
import PriceSlider from "./PriceSlider";

export const SidePanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [price,setPrice]=React.useState(searchParams.get('price'))

  const initialGenre = searchParams.getAll("genre");
  const [genre, setGenre] = React.useState(initialGenre || []);

  const initialEdition = searchParams.getAll("edition");
  const [edition, setEdition] = React.useState(initialEdition || []);

  const handleGenre = (e) => {
    if (e.target.checked) setGenre([...genre, e.target.value]);
    else {
      let updateGenre = [...genre];
      updateGenre.splice(updateGenre.indexOf(e.target.value), 1);
      setGenre(updateGenre);
    }
  };

  const handleEdition = (e) => {
    if (e.target.checked) setEdition([...edition, e.target.value]);
    else {
      let updateEdition = [...edition];
      updateEdition.splice(updateEdition.indexOf(e.target.value), 1);
      setEdition(updateEdition);
    }
  };

  React.useEffect(() => {
    const params = {
      genre,
      edition,
    };
    price && (params.price=price)
    setSearchParams(params);
  }, [genre, edition, price]);
  return (
    <div>
      <Heading>Filter</Heading>
      <div className={styles.filterContainer}>
        <div>
          <Heading>Genre</Heading>
          <div>
          <Checkbox
            defaultChecked={genre.includes("Science")}
            value={"Science"}
            onChange={handleGenre}
          >
            Science
          </Checkbox>
          <Checkbox
            defaultChecked={genre.includes("Fiction")}
            value={"Fiction"}
            onChange={handleGenre}
          >
            Fiction
          </Checkbox>
          <Checkbox
            defaultChecked={genre.includes("History")}
            value={"History"}
            onChange={handleGenre}
          >
            History
          </Checkbox>
          <Checkbox
            defaultChecked={genre.includes("Tech")}
            value={"Tech"}
            onChange={handleGenre}
          >
            Tech
          </Checkbox>
          <Checkbox
            defaultChecked={genre.includes("Business")}
            value={"Business"}
            onChange={handleGenre}
          >
            Business
          </Checkbox>
          </div>
        </div>
        <div>
          <Heading>Edition</Heading>
          <div>
          <Checkbox defaultChecked={edition.includes("2021")} value={"2021"} onChange={handleEdition}>
            2021
          </Checkbox>
          <Checkbox defaultChecked={edition.includes("2022")} value={"2022"} onChange={handleEdition}>
            2022
          </Checkbox>
          <Checkbox defaultChecked={edition.includes("2023")} value={"2023"} onChange={handleEdition}>
            2023
          </Checkbox>
          </div>
        </div>
        <div>
          <Heading>Price</Heading>
          <PriceSlider setprice={setPrice} price={price} />
        </div>
      </div>
    </div>
  );
};
