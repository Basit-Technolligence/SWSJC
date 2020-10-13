import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { addStudent, updateStudent } from "../actions/students";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import moment from "moment";

const TeacherForm = (props) => {
  const dispatch = useDispatch();
  let initialValues = {};
  let action = (s) => dispatch(addStudent(s));
  let buttonText = "ADD TEACHER RECORD";

  if (props.location.pathname === "/EditTeachers") {
    buttonText = "UPDATE TEACHER RECORD";
    action = (s) => dispatch(updateStudent(props.student[0].id, s));
    initialValues = {
      ["name"]: props.student[0].name,
      ["fatherName"]: props.student[0].fatherName,
      ["cast"]: props.student[0].cast,
      ["currentClass"]: props.student[0].currentClass,
      ["grNo"]: props.student[0].grNo,
      ["fee"]: props.student[0].fee,
      ["doa"]: moment(props.student[0].doa),
      ["dob"]: moment(props.student[0].dob),
    };
  }
  console.log("initial", initialValues);
  return (
    <>
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

        <FormItem label="Experience" name="experience">
          <Input />
        </FormItem>

        <FormItem label="Designation" name="designation">
          <Input />
        </FormItem>

        <FormItem label="XCR" name="xcr">
          <Input />
        </FormItem>


        <FormItem label="Cast" name="cast">
          <Input />
        </FormItem>

        <FormItem label="Gr No." name="grNo">
          <Input />
        </FormItem>
        <FormItem label="Date of Joining" name="doj">
          <DatePicker />
        </FormItem>
        <FormItem label="Salary Package" name="salary">
          <InputNumber />
        </FormItem>

        <FormItem label="Comments" name="comment">
          <Input.TextArea />
        </FormItem>

      </RegistrationForm>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state.studentReducer.singleStudent);
  return {
    techer: state.studentReducer.singleStudent,
  };
};
export default connect(mapStateToProps)(TeacherForm);
