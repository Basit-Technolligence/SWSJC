import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Grid from "@material-ui/core/Grid";
import OutlinedCard from "./outlined-card";
import { login } from '../actions/admin'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';


const LoginForm = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  useSelector(state => {
    if (state.adminReducer.loggedIn) {
      setIsLoading(false);
      history.push('/home');
      console.log('login done');
    } else {
      console.log("login failed")
    }
  });
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
    setIsLoading(true);
  };

  return (
    <Grid container justify="center" alignItems="center" style={{ marginTop: '70px' }}>
      <Grid item xs={8} sm={6} md={3}>
        <OutlinedCard padding="20px">
          <h2 style={{ marginBottom: "20px" }} className="theme-color">
            LOGIN
          </h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                className="login-form-button"
              >
                {isLoading ? "Logging In... " : "Login"}{"  "}
                {isLoading && <CircularProgress size={15} color="inherit"/>}
              </Button>
            </Form.Item>
          </Form>
        </OutlinedCard>
      </Grid>
    </Grid>
  );
};
export default LoginForm;
