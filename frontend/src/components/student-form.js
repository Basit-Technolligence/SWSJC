import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { addStudent } from "../actions/students";
import { useDispatch } from "react-redux";
const StudentForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <RegistrationForm
        buttonText="ADD STUDENT RECORD"
        action={(s) => dispatch(addStudent(s))}
      >
        <FormItem label="Name" name="name">
          <Input />
        </FormItem>
        <FormItem label="Father Name" name="fatherName">
          <Input />
        </FormItem>
        <FormItem label="Cast" name="cast">
          <Input />
        </FormItem>

        <FormItem label="Admission Class" name="admissionClass">
          <Select>
            <Select.Option value="class 1">Class 1</Select.Option>
            <Select.Option value="class 2">Class 2</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="Gr No." name="grNo">
          <Input />
        </FormItem>
        <FormItem label="Admisison Date" name="doa">
          <DatePicker />
        </FormItem>
        <FormItem label="Date of Birth " name="dob">
          <DatePicker />
        </FormItem>
        <FormItem label="Fee" name="fee">
          <InputNumber />
        </FormItem>
      </RegistrationForm>
    </>
  );
};

export default StudentForm;
