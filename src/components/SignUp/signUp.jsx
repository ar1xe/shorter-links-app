import React from "react";
import Footer from "components/Footer/footer";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import Header from "components/Header/header";
import { SignUpService } from "services/signUpService";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  h2 {
    margin: 0 0 30px 80px;
  }
`;
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  text-align: center;
  background-color: #eeeeee;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await SignUpService().authorizationUser({
      ...values,
    });
    localStorage.setItem("token", response.access_token);
    if (response.access_token) navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Header />

      <ContainerForm>
        <h2>Login</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </ContainerForm>

      <Footer />
    </Wrapper>
  );
};

export default SignUp;
