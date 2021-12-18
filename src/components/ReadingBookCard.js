import { Card } from "semantic-ui-react";

const ReadingBookCard = ({ title, author, publisher }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>Author: {author}</Card.Description>
        <Card.Description>Publisher: {publisher}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ReadingBookCard;
