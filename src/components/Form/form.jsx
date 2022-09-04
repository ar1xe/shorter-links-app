import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import imgChane from "./chain.svg";

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
const FormShorted = styled.form``;
const InputForm = styled.input``;
const ButtonForm = styled.button`
  /* border: 1px solid blue;
    border-radius: 0 10px 10px 0;
    background-color: #f5a952; */
`;
const ImgForm = styled.img``;

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      {/* <ImgForm src={imgChane}></ImgForm> */}
      <FormShorted onSubmit={handleSubmit(onSubmit)}>
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
        {errors.url && <div>{errors.url.message}</div>} 
      </FormShorted>
    </Wrapper>
  );
};

export default Form;
