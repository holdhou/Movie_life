import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Errormessage } from "../components/Errormessage";
import { Link } from "react-router-dom";

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
const Span = styled.span`
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
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
`;
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>
        <Input
          {...register("userid", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />

        <Input
          {...register("password", {
            required: "패스워드를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <Errormessage
          messages={[errors?.userid?.message, errors?.password?.message]}
        />

        <Button>로그인</Button>
        <Span>또는</Span>
        <Link to={"/registration"}>
          <Button>회원가입</Button>
        </Link>
      </Form>
    </Wrap>
  );
};
