import React from "react";
import MaterialTable from "material-table";
import ProfileDrawer from "./profile-drawer";
import { useHistory } from "react-router-dom";

const MaterialTableComponent = (props) => {
  const history = useHistory();
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const actions = [
    {
      icon: "edit",
      tooltip: "Edit",
      onClick: async (event, rowData) => {
        await props.getByIdAction(rowData.id);
        history.push("/EditStudent");
      },
    },
    {
      icon: "visibility",
      tooltip: "View Details",
      onClick: async (event, rowData) => {
        await props.getByIdAction(rowData.id);
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

export default MaterialTableComponent;
