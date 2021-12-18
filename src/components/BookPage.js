import { useState, useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import BookContainer from "./BookContainer";
import ReadingList from "./ReadingList";
import Search from "./Search";

const BookPage = () => {
  const [search, setSearch] = useState("");
  const [googleBooksData, setGoogleBooksData] = useState([]);
  const [readingListBooks, setReadingListBooks] = useState([]);
  const [readingListOn, setReadingListOn] = useState(false);

  // fetch information from Google Books API everytime the 'search' state changes
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCfmin596gjyWiJNgzKOCqkmo_KKNFtFKI&maxResults=5`
    )
      .then((res) => res.json())
      .then((bookData) => {
        setGoogleBooksData(bookData.items);
      });
  }, [search]);

  // function to handle the user 'search'
  const handleSearch = (text) => {
    setSearch(text);
  };

  // switch state when user clicks the "reading list button"
  const handleReadingListOn = () => {
    setReadingListOn((readingListOn) => !readingListOn);
  };

  console.log(googleBooksData);
  console.log(readingListBooks);
  console.log(readingListOn);

  return (
    // 1. button for user to access the "reading list" & toggle back to the search
    // 2. when not on the reading list, enable the search bar & renders
    // 3. when there is Google Books API data (searched), and when not in the reading list --> render search results
    // 4. when the reading list is on && if data exists in the reading list, show books from the reading list

    <main>
      {!readingListOn ? (
        <Button icon labelPosition="right" onClick={handleReadingListOn}>
          <Icon name="book" />
          My Reading List
        </Button>
      ) : (
        <Button icon labelPosition="right" onClick={handleReadingListOn}>
          <Icon name="book" />
          Search Books
        </Button>
      )}

      {!readingListOn && <Search handleSearch={handleSearch} search={search} />}

      {!readingListOn && googleBooksData ? (
        <BookContainer
          googleBooksData={googleBooksData}
          readingListBooks={readingListBooks}
          setReadingListBooks={setReadingListBooks}
          readingListOn={readingListOn}
        />
      ) : null}

      {readingListOn && readingListBooks ? (
        <ReadingList readingListBooks={readingListBooks} />
      ) : null}
    </main>
  );
};

export default BookPage;
