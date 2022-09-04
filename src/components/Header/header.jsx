import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { ShrinkOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 15%;
  text-align: center;
  background-color: #d5fff5;
  border-radius: 15px 15px 0 0;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif */
  
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
}
.signUp {
    border-radius: 10px;
    background-color: #f5a952;
}
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Shortly</h1>
        <ShrinkOutlined style={{fontSize: '30px'}}/>
      </Logo>
      <SignUp>
        <Button className="login">Login</Button>
        <Button type="primary" className="signUp">Sign Up</Button>
      </SignUp>
    </Wrapper>
  );
};

export default Header;
