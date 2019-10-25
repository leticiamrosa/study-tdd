import React from "react";
import { List } from "./styles";

export default function BooksList({ children, title }) {
  return (
    <>
      <List>
        <h6>{title}</h6>
        {children}
      </List>
    </>
  );
}
