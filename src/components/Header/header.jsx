import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { ShrinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 15%;
  text-align: center;
  background-color: #d5fff5;
  border-radius: 15px 15px 0 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  h1 {
    color: #642ba5;
  }
`;

const SignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  .login {
    border-radius: 10px;
    color: #642ba5;
  }
  .signUp {
    border-radius: 10px;
    background-color: #7f59aa;
    color: #d5fff5;
  }
`;

const Header = () => {
  return (
    <Wrapper>
        <Link to="/">
      <Logo>
        <h1>Shortly</h1>
        <ShrinkOutlined style={{ fontSize: "30px" }} />
      </Logo>
      </Link>
      <SignUp>
        <Link to="/signup">
        <Button className="login">Login</Button>
        </Link>
        <Link to="/registration">
          <Button type="primary" className="signUp">
            Sign Up
          </Button>
        </Link>
      </SignUp>
    </Wrapper>
  );
};

export default Header;
