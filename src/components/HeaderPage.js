import { Header, Icon } from "semantic-ui-react";

export const HeaderPage = () => {
  return (
    <div className="header">
      <Header as="h2" icon>
        <Icon name="book" />
        Book Finder 📚
        <Header.Subheader>
          Search books and save them to your reading list.
        </Header.Subheader>
      </Header>
    </div>
  );
};

export default HeaderPage;
