import React from "react";
import MaterialTableComponent from "./material-table";
import { fetchExpenses } from "../actions/expensesActions";
import { connect } from "react-redux";

const ExpenseTable = (props) => {
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

const mapDispatchToProps = (dispatch) =>{
  return{
    allExpenses: () => {
      dispatch(fetchExpenses())
    },
  }
}


const mapStateToProps = (state) =>{
  console.log("statefssf::",state)
  return{
    expenses: state.allExpReducer.allExp,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);

