import React from "react";
import ReactToPrint from "react-to-print";
import './style.css';


let date = new Date();


class ComponentToPrint extends React.Component {
    
  render() {
    return (
        <div className="p-50">
        <table className="print-receipt">
        <h1 className="align-center">UBL JING BRANCH</h1>
        <h2 className="align-center">A/C No:04820201006367 SAHARA WELFARE SOCIETY</h2>
        <h3 className="align-center">Bank Copy</h3>
        <h4 className="align-center">Date and Time: {new Date().toLocaleString()}</h4>
        <br/>
        <br/>
          <tr>
            <th>Name</th>
            <td>{this.props.Name}</td>
          </tr>
          <tr>
            <th>Father Name</th>
            <td>{this.props.fatherName}</td>
          </tr>
          <tr>
            <th>Class</th>
            <td>{this.props.currentClass}</td>
          </tr>
          <tr>
            <th>Gr No.</th>
            <td>{this.props.grno}</td>
          </tr>
          <tr>
            <th>Fee</th>
            <td>{this.props.fee}</td>
          </tr>
          <tr>
            <th>Fee in Words</th>
            <td>Francisco </td>
          </tr>
         
        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <table>
                <tr>
                    <td><hr/></td>
                    <td><hr/></td>
                    <td><hr/></td>
                </tr>
                <tr>
                    <td>Bank Cashier</td>
                    <td>Bank Depositer</td>
                    <td>SWS Accountant</td>
                </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;


