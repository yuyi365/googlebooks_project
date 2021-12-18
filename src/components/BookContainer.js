import BookCard from "./BookCard";

const BookContainer = ({
  googleBooksData,
  readingListOn,
  setReadingListBooks,
  readingListBooks,
}) => {
  const mapBooks = googleBooksData.map((book) => {
    return (
      <BookCard
        key={book.id}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors[0]}
        publisher={book.volumeInfo.publisher}
        readingListOn={readingListOn}
        setReadingListBooks={setReadingListBooks}
        readingListBooks={readingListBooks}
      />
    );
  });

  return <div className="card-container">{mapBooks}</div>;
};

export default BookContainer;
