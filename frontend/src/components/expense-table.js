import React, {useEffect} from "react";
import MaterialTableComponent from "./material-table";
import { fetchExpenses } from "../actions/expensesActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const ExpenseTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

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

  const data = props.expenses.map((expense)=>{
    return{
      title: expense.title,
      amount: expense.Amount,
      date: expense.doe,
      comment: expense.comment,

    }
  })
  return (
    <MaterialTableComponent title="Expenses" data={data} columns={columns} />
  );
}

const mapStateToProps = (state) =>{
  console.log("statefssf::",state)
  return{
    expenses: state.allExpReducer.allExp,
  }
}

export default connect(mapStateToProps)(ExpenseTable);

