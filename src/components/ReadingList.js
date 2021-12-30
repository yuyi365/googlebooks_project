import ReadingBookCard from "./ReadingBookCard";

const ReadingList = ({ readingListBooks }) => {
  const mapReadingList = readingListBooks.map((book) => {
    return (
      <ReadingBookCard
        title={book.title}
        author={book.author}
        publisher={book.publisher}
      />
    );
  });

  return (
    <div className="card-container">
      {readingListBooks.length === 0 ? (
        <h2 id="add-book-message">"Please add some books!"</h2>
      ) : (
        <div>{mapReadingList}</div>
      )}
    </div>
  );
};

export default ReadingList;
