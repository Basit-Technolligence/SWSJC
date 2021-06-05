import React from "react";
import { Card } from 'antd';

export default function OutlinedCard({ children }) {

  return (
    <Card bordered={true} hoverable={true}  style={{  }}>
       {children}
    </Card>

    // <Card className={classes.root} style={{ padding }} variant="outlined">
     
    // </Card>
  );
}
