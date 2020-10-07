import React from "react";
import MaterialTableComponent from "./material-table";

const StudentTable = () => {
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
      title: "Admission Class",
      field: "admissionClass",
    },
  ];

  const data = [
    {
      name: "Ali Khan",
      fatherName: "Baran",
      gr: "123",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      name: "Zerya Betül",
      fatherName: "Baran",
      gr: "108",
      birthYear: 2017,
      birthCity: 34,
    },
  ];
  return (
    <MaterialTableComponent title="Students" data={data} columns={columns} />
  );
};

export default StudentTable;
