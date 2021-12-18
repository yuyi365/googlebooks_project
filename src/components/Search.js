import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const Search = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSearchSubmit} style={{ padding: "3%" }}>
      <Form.Field>
        <label id="search-label">Search book by title: </label>
        <input
          style={{ width: "50%", textAlign: "center" }}
          placeholder="ex: Catcher in the Rye, The Great Gatsby"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <span id="search-button-div">
          <Button color="blue" type="submit" size="large">
            Search
          </Button>
        </span>
      </Form.Field>
    </Form>
  );
};

export default Search;
