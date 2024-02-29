import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { colors } from "../../Variables/variables";

// Define a custom component for the search bar
const SearchBar: React.FC = () => {
  // Use state to store the user input
  const [searchTerm, setSearchTerm] = useState("");

  // Define a function to handle the input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Define a function to handle the search button click
  const handleSearch = () => {
    // Perform the search logic here
    // For example, call an API or filter an array of customer logs
    console.log("Searching for", searchTerm);
  };

  // Return the JSX element for the search bar
  return (
    <Box width="55%">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CiSearch color={colors.textColor} size="22px" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search customer log by customer name, email address & phone number"
          _placeholder={{
            color: `${colors.textColor}`,
          }}
          variant="unstyled"
          outline="2px solid #CCCFCE66"
          borderRadius="6px"
          bgColor={colors.primaryColor}
          value={searchTerm}
          onChange={handleChange}
        />
        <Button
          _active={{
            transform: "scale(.85)",
            transition: "all .2s ease-in-out",
          }}
          colorScheme="transparent"
          backgroundColor="#fff"
          color={colors.headerColor}
          onClick={handleSearch}
          marginX=".5rem"
          outline={`1px solid ${colors.headerColor} `}>
          Search
        </Button>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
