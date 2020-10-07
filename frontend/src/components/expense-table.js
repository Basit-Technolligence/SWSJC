import React from "react";
import MaterialTableComponent from "./material-table";

export default function ExpenseTable() {
  const data = [];
  const columns = [
    { title: "Title", field: "title" },
    {
      title: "Amount in Rs.",
      field: "amount",
    },
    { title: "Date", field: "date" },
    {
      title: "Comment",
      field: "comment",
    },
  ];
  return (
    <MaterialTableComponent title="Expenses" data={data} columns={columns} />
  );
}
