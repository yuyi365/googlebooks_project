import { Card } from "semantic-ui-react";

const ReadingBookCard = ({ title, author, publisher }) => {
  // renders cards that display books from the reading list

  return (
    <div className="single-card">
      <Card style={{ padding: "3%" }}>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>Author: {author}</Card.Description>
          <Card.Description>Publisher: {publisher}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ReadingBookCard;
