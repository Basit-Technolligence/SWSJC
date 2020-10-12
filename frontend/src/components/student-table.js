import React, { useEffect } from "react";
import MaterialTableComponent from "./material-table";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getStudents,
  deleteStudent,
  getStudentById,
} from "../actions/students";
import { Col } from "antd";
import { DescriptionItem } from "./profile-drawer";

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
  const profileData = [
    <Col span={12}>
      <DescriptionItem title="Name" content="Hamza" />
    </Col>,
    <Col span={12}>
      <DescriptionItem title="Father Name" content={props.student.fatherName} />
    </Col>,
    <Col span={12}>
      <DescriptionItem title="Gr No." content={props.student.gr} />
    </Col>,
  ];
  return (
    <MaterialTableComponent
      title="Students"
      data={data}
      columns={columns}
      getByIdAction={(id) => dispatch(getStudentById(id))}
      deleteAction={(id) => dispatch(deleteStudent(id))}
      profileData={profileData}
    />
  );
};

const mapStateToProps = (state) => {
  console.log("state", state.studentReducer);
  return {
    students: state.studentReducer.students,
    student: state.studentReducer.singleStudent,
  };
};
export default connect(mapStateToProps)(StudentTable);
