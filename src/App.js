import Form from "./components/Form/form";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Form />
      <Footer />
    </Wrapper>
  );
}

export default App;
