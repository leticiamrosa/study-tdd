import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Body from "../../components/body";
import BooksList from "../../components/Books";
import ListItem from "../../components/ListItem";
import Loading from "../../components/loading";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

function Home(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function displayBooks() {
      await setLoading(props.data.loading);
    }

    displayBooks();
    // eslint-disable-next-line
  }, [loading]);

  if (!loading) {
    return <Loading />;
  }
  console.log(loading);
  return (
    <>
      <Header />
      <Body>
        <BooksList title="Ninja Reading List">
          <ListItem items={props.data.books} />
        </BooksList>
      </Body>
    </>
  );
}

export default graphql(getBooksQuery)(Home);
