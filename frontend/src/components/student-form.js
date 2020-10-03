import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, Cascader, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";

const StudentForm = () => {
  return (
    <>
      <RegistrationForm buttonText="ADD STUDENT RECORD">
        <FormItem label="Name" name="name">
          <Input />
        </FormItem>

        <FormItem label="Class" name="class">
          <Select>
            <Select.Option value="class 1">Class 1</Select.Option>
            <Select.Option value="class 2">Class 2</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="Admission No." name="admission-no">
          <Input />
        </FormItem>
        <FormItem label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </FormItem>
        <FormItem label="Admisison Date" name="doa">
          <DatePicker />
        </FormItem>
        <FormItem label="InputNumber">
          <InputNumber />
        </FormItem>
      </RegistrationForm>
    </>
  );
};

export default StudentForm;
