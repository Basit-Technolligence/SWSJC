import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import moment from "moment";
import { addTeacher, updateTeacher } from "../actions/teacherActions";

const TeacherForm = (props) => {
  const dispatch = useDispatch();
  let initialValues = {};
  let action = (s) => dispatch(addTeacher(s));
  let buttonText = "ADD RECORD";

  if (props.location.pathname === "/home/EditEmployees") {
    buttonText = "UPDATE RECORD";
    action = (s) => dispatch(updateTeacher(props.teacher[0].id, s));
    initialValues = {
      ["name"]: props.teacher[0].name,
      ["fatherName"]: props.teacher[0].fatherName,
      ["cnic"]: props.teacher[0].cnic,
      ["qualification"]: props.teacher[0].qualification,
      ["experience"]: props.teacher[0].experience,
      ["doj"]: moment(props.teacher[0].doa),
      ["designation"]: props.teacher[0].designation,
      // ["xcr"]: props.teacher[0].xcr,
      ["cast"]: props.teacher[0].cast,
      // ["grNo"]: props.teacher[0].grNo,
      ["salary"]: props.teacher[0].salary,
      ["comment"]: props.teacher[0].comment,
      ["bankaccount"]: props.teacher[0]?.bankaccount,
      ["postaladdress"]: props.teacher[0]?.postaladdress,
      ["martialstatus"]: props.teacher[0]?.martialstatus,
      ["eobi"]: props.teacher[0]?.eobi,

    };
  }
  console.log("initial", initialValues);
  return (
    <>
    
    <h1>Add Employee's Record</h1>
      <RegistrationForm
        buttonText={buttonText}
        action={action}
        initialValues={initialValues}
      >

        <FormItem label="Name" name="name">
          <Input />
        </FormItem>
        <FormItem label="Father Name" name="fatherName">
          <Input />
        </FormItem>
        <FormItem label="National CNIC" name="cnic">
          <Input />
        </FormItem>
        <FormItem label="Qualification" name="qualification">
          <Input />
        </FormItem>

        <FormItem label="Martial Status" name="martialstatus">
          <Select style={{ width: "100%" }}>
            <Select.Option value="married">Married</Select.Option>
            <Select.Option value="unmarried">Unmarried</Select.Option>
            <Select.Option value="divorced">Divorceds</Select.Option>
          </Select>
        </FormItem>

        <FormItem label="Experience" name="experience">
          <Input />
        </FormItem>

        <FormItem label="Designation" name="designation">
          <Input />
        </FormItem>

        <FormItem label="Eobi #" name="eobi">
          <Input />
        </FormItem>

        {/* <FormItem label="XCR" name="xcr">
          <Input />
        </FormItem> */}


        <FormItem label="Cast" name="cast">
          <Input />
        </FormItem>

        {/* <FormItem label="Gr No." name="grNo">
          <Input />
        </FormItem> */}

        <FormItem label="Bank Account" name="bankaccount">
          <Input />
        </FormItem>

        <FormItem label="Date of Joining" name="doj">
          <DatePicker style={{ width: "100%" }} />
        </FormItem>
        <FormItem label="Salary Package" name="salary">
          <InputNumber style={{ width: "100%" }} />
        </FormItem>

        <FormItem label="Postal Address" name="postaladdress">
          <Input.TextArea />
        </FormItem>

        <FormItem label="Comments" name="comment">
          <Input.TextArea />
        </FormItem>

      </RegistrationForm>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state.teacherReducer.oneTeacher);
  return {
    teacher: state.teacherReducer.oneTeacher
  };
};
export default connect(mapStateToProps)(TeacherForm);
