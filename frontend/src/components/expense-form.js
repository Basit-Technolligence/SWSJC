import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { useDispatch } from "react-redux";
import { addExpense } from "../actions/expensesActions";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  return (
    <>
    
    <h1>Add Expense Record</h1>
      <RegistrationForm buttonText="ADD RECORD" action={(s) => dispatch(addExpense(s))}
 >

        <FormItem label="Title" name="title">
          <Input />
        </FormItem>
        <FormItem label="Date of Expense" name="date">
          <DatePicker style={{width: "100%"}}/>
        </FormItem>
        <FormItem label="Ammount in Rs" name="amount">
          <InputNumber style={{width: "100%"}} />
        </FormItem>
        <FormItem label="Comment" name="comment">
          <Input.TextArea />
        </FormItem>
      </RegistrationForm>
    </>
  );
};

export default ExpenseForm;
