import { useState } from "react";
import { Button, Card } from "semantic-ui-react";

const BookCard = ({
  title,
  author,
  publisher,
  readingListBooks,
  setReadingListBooks,
}) => {
  const [added, setAdded] = useState(false);

  const handleAddToList = () => {
    setAdded((added) => !added);
    setReadingListBooks([
      ...readingListBooks,
      {
        title: title,
        author: author,
        publisher: publisher,
      },
    ]);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>Author: {author}</Card.Description>
        <Card.Description>Publisher: {publisher}</Card.Description>
      </Card.Content>
      {!added ? (
        <Button onClick={handleAddToList}>Add to reading list</Button>
      ) : (
        <Button disabled>Added to list</Button>
      )}
    </Card>
  );
};

export default BookCard;
