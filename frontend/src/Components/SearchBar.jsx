import React, { useState } from "react"
import {
  Box,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import styles from "./CSS/SearchBar.module.css"

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const mockResults = [
      "CHAOS",
      "Harry Potter and the Philosopher's Stone",
      "The Hitchhiker's Guide to the Galaxy",
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

  return (
    <div className={styles.searchBarContainer}>
      <Input
        type="text"
        placeholder="Search Books"
        value={searchValue}
        onChange={handleInputChange}
      />
      {showResults && (
        <Box>
          <List className={styles.searchResults}>
            {results.map((result,index) => (
              <ListItem
                key={index}
                onClick={() => handleItemClick(result)}
            
              >
                <Text>{result}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};
