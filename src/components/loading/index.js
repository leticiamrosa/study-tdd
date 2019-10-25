import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading(props) {
  if (props) {
    return (
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={props}
      />
    );
  }
}
