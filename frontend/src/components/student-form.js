import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, Cascader, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { addStudent } from "../actions/students";
const StudentForm = () => {
  return (
    <>
      <RegistrationForm
        buttonText="ADD STUDENT RECORD"
        action={(s) => addStudent(s)}
      >
        <FormItem label="Name" name="name">
          <Input />
        </FormItem>
        <FormItem label="Father Name" name="father-name">
          <Input />
        </FormItem>
        <FormItem label="Cast" name="cast">
          <Input />
        </FormItem>

        <FormItem label="Admission Class" name="admission-class">
          <Select>
            <Select.Option value="class 1">Class 1</Select.Option>
            <Select.Option value="class 2">Class 2</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="Gr No." name="gr-no">
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
