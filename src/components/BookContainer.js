import BookCard from "./BookCard";

const BookContainer = ({
  googleBooksData,
  readingListOn,
  setReadingListBooks,
  readingListBooks,
}) => {
  const mapBooks = googleBooksData.map((book) => {
    if (
      book.volumeInfo.authors &&
      book.volumeInfo.title &&
      book.volumeInfo.publisher
    ) {
      return (
        <BookCard
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          publisher={book.volumeInfo.publisher}
          readingListOn={readingListOn}
          setReadingListBooks={setReadingListBooks}
          readingListBooks={readingListBooks}
        />
      );
    } else if (book.volumeInfo.title && book.volumeInfo.publisher) {
      return (
        <BookCard
          title={book.volumeInfo.title}
          author={"N/A"}
          publisher={book.volumeInfo.publisher}
          readingListOn={readingListOn}
          setReadingListBooks={setReadingListBooks}
          readingListBooks={readingListBooks}
        />
      );
    } else if (book.volumeInfo.title && book.volumeInfo.authors) {
      return (
        <BookCard
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          publisher={"N/A"}
          readingListOn={readingListOn}
          setReadingListBooks={setReadingListBooks}
          readingListBooks={readingListBooks}
        />
      );
    } else if (book.volumeInfo.title) {
      return (
        <BookCard
          title={book.volumeInfo.title}
          author={"N/A"}
          publisher={"N/A"}
          readingListOn={readingListOn}
          setReadingListBooks={setReadingListBooks}
          readingListBooks={readingListBooks}
        />
      );
    } else {
      return null;
    }
  });

  return <div className="card-container">{mapBooks}</div>;
};

export default BookContainer;
