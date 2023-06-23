import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import styles from "./CSS/SearchBar.module.css";
import { SearchIcon } from '@chakra-ui/icons'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate=useNavigate()
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const mockResults = [
      "CHAOS",
      "Harry Potter and the Philosopher's Stone",
      "The Hitchhiker's Guide to the Galaxy",
      "From Space to Sea",
      "The Golden Years",
      "Three Thousand Stitches",
    ];
    const filteredResults = mockResults.filter((result) =>
      result.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);

    setShowResults(value.length > 0);
  };

  const handleItemClick = (item) => {
    setSearchValue(item);
    setShowResults(false);
  };

  const handleSearch=()=>{
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/books/search`,
      params: { name:searchValue },
    })
      .then((res) => {
        // console.log(res.data);
        navigate(`/bookdetails/${res.data._id}`)
      })
      .catch((err) => console.log(err)); 
  }

  return (
    <div className={styles.searchBarContainer}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search Books"
          value={searchValue}
          onChange={handleInputChange}
        />
        <InputRightElement>
          <Button onClick={handleSearch}><SearchIcon/></Button>
        </InputRightElement>
      </InputGroup>
      {showResults && (
        <Box>
          <List className={styles.searchResults}>
            {results.map((result, index) => (
              <ListItem key={index} onClick={() => handleItemClick(result)}>
                <Text>{result}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
}
