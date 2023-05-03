import React from "react";

function TableData({ data, icon }) {
  console.log();
  return (
    <>
      <td className="td">{data || icon}</td>
    </>
  );
}

export default TableData;
