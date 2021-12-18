import React from "react";
import ReadingBookCard from "./ReadingBookCard";

const ReadingList = ({ readingListBooks }) => {
  const mapReadingList = readingListBooks.map((book) => {
    return (
      <ReadingBookCard
        key={book.id}
        title={book.title}
        author={book.author}
        publisher={book.publisher}
      />
    );
  });

  return <div>{mapReadingList}</div>;
};

export default ReadingList;
