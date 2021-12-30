import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

it("Search function renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Search />);

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(
    queryByPlaceholderText("ex: Catcher in the Rye, The Great Gatsby")
  ).toBeTruthy();
});

describe("Search input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<Search />);

    const searchInput = queryByPlaceholderText(
      "ex: Catcher in the Rye, The Great Gatsby"
    );

    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});

describe("Search values", () => {
  describe("with empty queries", () => {
    it("will not trigger a search request", () => {
      const handleSearch = jest.fn();

      const { queryByTestId } = render(<Search handleSearch={handleSearch} />);

      fireEvent.click(queryByTestId("search-button"));
      expect(handleSearch).not.toHaveBeenCalled();
    });
  });
});

describe("Valid search queries containing numbers or letters from the alphabet", () => {
  it("will trigger the handleSearch function", () => {
    const handleSearch = jest.fn();

    const { queryByTestId, queryByPlaceholderText } = render(
      <Search handleSearch={handleSearch} />
    );
    const searchInput = queryByPlaceholderText(
      "ex: Catcher in the Rye, The Great Gatsby"
    );
    fireEvent.change(searchInput, {
      target: { value: "The Lord of The Rings" },
      target: { value: "a" },
    });

    fireEvent.click(queryByTestId("search-button"));
    expect(handleSearch).toHaveBeenCalled();
  });
});

describe("Invalid search queries containing only symbols or starting with empty space(s)", () => {
  it("will not trigger the handleSearch function", () => {
    const handleSearch = jest.fn();

    const { queryByTestId, queryByPlaceholderText } = render(
      <Search handleSearch={handleSearch} />
    );
    const searchInput = queryByPlaceholderText(
      "ex: Catcher in the Rye, The Great Gatsby"
    );
    fireEvent.change(searchInput, {
      target: { value: "$% @!?" },
      target: { value: " ?!" },
      target: { value: " Catch-22" },
    });

    fireEvent.click(queryByTestId("search-button"));
    expect(handleSearch).not.toHaveBeenCalled();
  });
});
