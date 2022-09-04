import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 15%;
  /* text-align: center; */
  background-color: #7f59aa;
  border-radius: 0 0 15px 15px;
  h2 {
    color: white;
  }
`;

const Footer = () => {
  return <Wrapper>
    <h2>Boost your links is simple</h2>
  </Wrapper>;
};

export default Footer;
