import React, { useEffect, useRef, useState } from "react";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import { getStudents, getChallan } from "../actions/students";
import { connect } from "react-redux";
import PrintChallan from "./PrintChallan";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import Example from "./PrintChallan";
import ComponentToPrint from './PrintChallan';
import Button from '@material-ui/core/Button';




const StudentChallan = (props) => {
  const dispatch = useDispatch();
  var componentRef = useRef();

  const [show, setShow] = useState(false);

  const [nam, setName] = useState({ name: "Haseeb", fatherName: "Shaukat", grno: "12321", fee: "123", currentClass: "MATRIC", show: false });
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
    { title: "Fees", field: "fee" },
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
      fee: "Rs. " + student.fee,
      currentClass: student.currentClass,
    };
  });


  let actions = [
    {
      icon: "save",
      tooltip: "Print Challan",
      onClick: (event, rowData) => { setName({ name: rowData.name, fatherName: rowData.fatherName, grno: rowData.gr, fee: rowData.fee, currentClass: rowData.currentClass, show: true }); }
    },
  ];
  return (
    <>
      <MaterialTable
        title={"Print Students' Challan"}
        columns={columns}
        actions={actions}
        data={data}
      />

      <br/>
      <br/>
      <hr/>

      {nam.show ? <div>
        
        <Button variant="contained" color="primary" onClick={handlePrint}>
      Print Challan
    </Button>
        <ComponentToPrint ref={componentRef} Name={nam.name} fatherName={nam.fatherName} grno={nam.grno} fee={nam.fee} currentClass={nam.currentClass} /></div> : ""}

    </>
  );
};


const mapStateToProps = (state) => {
  return {
    students: state.studentReducer.students,
  };
};


export default connect(mapStateToProps)(StudentChallan);
