import React, {useState} from "react";
import OutlinedCard from "./outlined-card";
import { Form, Row, Col, Button } from "antd";
import Grid from "@material-ui/core/Grid";

const RegistrationForm = (props) => {

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    props.action(values);
  };
  const getFields = () => {
    const children = [];
      children.push(
        <Row gutter={24}>
        <Col span={12} >
              {
              props.children.filter((child, index) =>  {
                if(index % 2 === 0)
                  return child ;
              })
            }
        </Col>
        <Col span={12} >
           {
              props.children.filter((child, index) =>  {
                if(index % 2 === 1)
                  return child ;
              })
            } 
        </Col>
        </Row>,
      );

    return children;
  };

  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12}>
        <OutlinedCard>
          <Form
           name="advanced_search"
           className="ant-advanced-search-form"
            layout="vertical"
            initialValues={props.initialValues}
            onFinish={onFinish}
          >
            {getFields()}

            <Form.Item label=" " style={{width: "100%"}} colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                className="login-form-button"
              >
                {props.buttonText}
              </Button>
            </Form.Item>
          </Form>
        </OutlinedCard>
      </Grid>
      
    </Grid>
  );
};
export default RegistrationForm;
