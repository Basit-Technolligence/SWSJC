import React, { useEffect } from "react";
import MaterialTableComponent from "./material-table";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getStudents,
  deleteStudent,
  getStudentById,
} from "../actions/students";

const StudentTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents());
  }, []);
  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Father Name",
      field: "fatherName",
    },
    {
      title: "Gr No.",
      field: "gr",
    },
    { title: "Date of Birth", field: "dob" },
    {
      title: "Current Class",
      field: "currentClass",
    },
  ];

  const data = props.students.map((student) => {
    return {
      id: student.id,
      name: student.name,
      fatherName: student.fatherName,
      gr: student.grNo,
      currentClass: student.currentClass,
      dob: student.dob,
    };
  });

  return (
    <MaterialTableComponent
      title="Students"
      data={data}
      columns={columns}
      getByIdAction={(id) => dispatch(getStudentById(id))}
      deleteAction={(id) => dispatch(deleteStudent(id))}
    />
  );
};

const mapStateToProps = (state) => {
  console.log("state", state.studentReducer);
  return {
    students: state.studentReducer.students,
  };
};
export default connect(mapStateToProps)(StudentTable);
