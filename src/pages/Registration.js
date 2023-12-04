import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Errormessage } from "../components/Errormessage";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 15vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;

const H3 = styled.h3`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  margin-top: 20px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: #4673da;
  text-align: center;
  margin: 10px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {
    if (isValid) {
      window.location.href = "/";
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>회원가입</Title>

        <H3>아이디</H3>
        <Input
          {...register("userid", {
            required: "아이디를 4자리 이상 입력하세요",
            minLength: {
              value: 4,
            },
            pattern: {
              value: /^(?=.*[A-Za-z]).{4,15}$/,
              message: "4자이상15이하 최소 영문1글자 이상입력하세요 ",
            },
          })}
          type="text"
          placeholder="4자이상 등록해주세요"
        />
        <Errormessage messages={[errors?.userid?.message]} />
        <H3>패스워드</H3>
        <Input
          {...register("password", {
            required: "패스워드를 8자리 이상 입력해주세요",
            minLength: {
              value: 8,
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{8,20}$/,
              message: "영문자와 숫자를 최소 1글자 이상 포함하여 입력하세요",
            },
          })}
          type="password"
          placeholder="8자이상 영문,숫자 1글자이상입력하세요"
        />

        <Errormessage messages={[errors?.password?.message]} />

        <Button $isActive={isValid}>회원가입</Button>
      </Form>
    </Wrap>
  );
};
