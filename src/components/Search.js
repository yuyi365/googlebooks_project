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
    <Form onSubmit={handleSearchSubmit}>
      <Form.Field>
        <label>Book Title</label>
        <input
          placeholder="Catcher in the Rye"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Form.Field>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
