import React from "react";
import MaterialTable from "material-table";

const MaterialTableComponent = (props) => {
  const actions = [
    {
      icon: "edit",
      tooltip: "Edit",
      onClick: (event, rowData) => {},
    },
    {
      icon: "visibility",
      tooltip: "View Details",
      onClick: (event, rowData) => {},
    },
  ];

  return (
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

              resolve();
            }, 1000);
          }),
      }}
    />
  );
};

export default MaterialTableComponent;
