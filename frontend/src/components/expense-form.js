import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";

const ExpenseForm = () => {
  return (
    <>
      <RegistrationForm buttonText="ADD EXPENSE RECORD">
        <FormItem label="Title" name="title">
          <Input />
        </FormItem>
        <FormItem label="Date of Expense" name="doe">
          <DatePicker />
        </FormItem>
        <FormItem label="Ammount in Rs" name="expense-ammount">
          <InputNumber />
        </FormItem>
        <FormItem label="Comment" name="comment">
          <Input.TextArea />
        </FormItem>
      </RegistrationForm>
    </>
  );
};

export default ExpenseForm;
