import { useState } from "react";
import { Button, Card } from "semantic-ui-react";

const BookCard = ({
  id,
  title,
  author,
  publisher,
  readingListBooks,
  setReadingListBooks,
}) => {
  // render cards that display books from user searches

  const [added, setAdded] = useState(false);

  const handleAddToList = () => {
    setAdded((added) => !added);
    setReadingListBooks([
      ...readingListBooks,
      {
        title: title,
        author: author,
        publisher: publisher,
        id: id,
      },
    ]);
  };

  return (
    <div className="single-card">
      <Card style={{ padding: "3%" }}>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>Author: {author}</Card.Description>
          <Card.Description>Publisher: {publisher}</Card.Description>
        </Card.Content>
        {!added ? (
          <Button color="green" onClick={handleAddToList}>
            Add to reading list
          </Button>
        ) : (
          <Button disabled>Added to list</Button>
        )}
      </Card>
    </div>
  );
};

export default BookCard;
