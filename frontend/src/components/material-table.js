import React from "react";
import MaterialTable from "material-table";
import ProfileDrawer from "./profile-drawer";
import { connect } from "react-redux";

const MaterialTableComponent = (props) => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const actions = [
    {
      icon: "edit",
      tooltip: "Edit",
      onClick: (event, rowData) => {},
    },
    {
      icon: "visibility",
      tooltip: "View Details",
      onClick: (event, rowData) => {
        props.getByIdAction(rowData.id);
        setDrawerVisible(true);
      },
    },
  ];

  return (
    <>
      <MaterialTable
        title={props.title + " Record"}
        columns={props.columns}
        actions={actions}
        data={props.data}
        options={{ exportButton: true }}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                //write delete code here
                props.deleteAction(oldData.id);
                resolve();
              }, 1000);
            }),
        }}
      />
      <ProfileDrawer
        drawerVisible={drawerVisible}
        closeDrawer={() => setDrawerVisible(!drawerVisible)}
        data={props.profileData}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    student: state.studentReducer.singleStudent,
  };
};
export default connect(mapStateToProps)(MaterialTableComponent);
