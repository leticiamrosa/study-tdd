import React from "react";
import { Item, Text } from "./styles";

export default function ListItem({ items }) {
  console.log(items);
  return (
    <>
      {items &&
        items.map(item => (
          <Item key={item.id}>
            <Text title>{item.name}</Text>
            <Text author>{item.author}</Text>
            <Text genre>{item.genre}</Text>
          </Item>
        ))}
    </>
  );
}
