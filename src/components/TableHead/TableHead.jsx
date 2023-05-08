import React from "react";
import "./TableHead.css";

function TableHead({ data }) {
  return (
    <>
      <th className="td">{data}</th>
    </>
  );
}

export default TableHead;
