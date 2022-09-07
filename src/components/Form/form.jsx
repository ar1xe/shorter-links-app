// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import tr from "./tr.png"
import { createShortLink } from "store/slice/linkSlice";
import ShortenLinks from "components/ShortenLinks/shortenLinks";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  text-align: center;
  background-color: #eeeeee;
  .input {
    width: 50%;
  }
  .inputBtn {
    background-color: #f5a952;
  }
`;
const ContainerForm = styled.div`
  width: 80%;
  height: 70%;
`;
const InputForm = styled.input`
  width: 80%;
`;
const ButtonForm = styled.button`
  background-color: #7f59aa;
  color: #d5fff5;
  border-radius: 0px 10px 10px 0;
`;
const ButtonRedirect = styled.button`
  background-color: #7f59aa;
  color: #d5fff5;
  border-radius: 10px;
  width: 100px;
  margin-top: 20px;
`;
const ErrorMsg = styled.div`
  margin-top: 10px;
  color: red;
`;
const LoginRedirect = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
img {
  width: 180px;
  height: 200px;
}
span {
  font-size: 30px;
}
`;

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (url) => {
    // @ts-ignore
    dispatch(createShortLink(url.url));
    reset();
  };

  const redirectLogIn = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <ContainerForm>
        {localStorage.getItem("token") ? (
          <div onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              type="url"
              placeholder="Shorten a link here..."
              {...register("url", {
                required: "Please add a link",
                pattern: {
                  value:
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: "Please enter a valid URL",
                },
              })}
            ></InputForm>
            <ButtonForm type="submit">Shorten it!</ButtonForm>
            {errors.url && <ErrorMsg>{errors.url.message}</ErrorMsg>}
            <ShortenLinks />
          </div>
        ) : (
          <LoginRedirect>
            <span>You are not logged in</span>
            <img src={tr} alt="login" />
            <ButtonRedirect type="submit" onClick={() => redirectLogIn()}>
              Log in
            </ButtonRedirect>
          </LoginRedirect>
        )}
      </ContainerForm>
    </Wrapper>
  );
};

export default Form;
