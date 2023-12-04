import { useForm } from "react-hook-form";
import styled from "styled-components";
import { searchapi } from "../../api";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const Div = styled.div`
  margin-top: 10%;
`;

const Form = styled.form``;
const Crewtitle = styled.div`
  font-size: 6vh;
  margin-bottom: 10px;
  letter-spacing: -7px;
  font-weight: 900;
  
`;

const InputContainer = styled.div`
  position: relative;
  @media screen and (max-width: 420px) {
    margin-top: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  margin: 1% 0;
  font-size: 30px;
  padding-left: 40px;
  line-height: 30px;
  @media screen and (max-width: 450px){
     font-size: 20px;
  }
  
`;

const InputImage = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #333;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
  }
 
`;

const Con = styled.div``;

const Box = styled.div``;

const Bgimg = styled.div`
border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 20px;
  width: 20vh;
  height: 300px;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center/contain;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 600px) {
   
  }
`;

const Sertitle = styled.div`
  font-size: 20px;
  padding: 5px 5px 0 5px;
  font-weight: 900;
`;

const Title = styled.div`
  text-align: center;
  font-size: 100px;
  font-weight: 900;
  @media screen and (max-width: 600px){
     font-size: 70px;
  }
  @media screen and (max-width: 420px){
     display: none;
  }
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [movies, setMovies] = useState();
  const [people, setPeople] = useState();

  const searchHandler = async (data) => {
    const { search } = data;
    try {
      const { results } = await searchapi(search);
      setMovies(results.filter((data) => data.media_type === "movie"));
      setPeople(results.filter((data) => data.media_type === "person"));
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movies);
  console.log(people);

  return (
    <Div>
      <Title>MOVIE LIFE</Title>
      <Form onSubmit={handleSubmit(searchHandler)}>
        <InputContainer>
          <Input
            {...register("search")}
            type="text"
            placeholder="제목, 이름을 입력해주세요"
          />
          <InputImage />
        </InputContainer>
      </Form>
      <Box>
        {movies && movies.length > 0 && (
          <>
            <Crewtitle>영화 및 시리즈</Crewtitle>
            <ConWrap>
              {movies.map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <Bgimg $bgUrl={data.poster_path} />
                  </Link>
                  <Sertitle>{data.title}</Sertitle>
                </Con>
              ))}
            </ConWrap>
          </>
        )}
        {people && people.length > 0 && (
          <>
            <Crewtitle>배우 및 감독</Crewtitle>
            <ConWrap>
              {people.map((data) => (
                <Con key={data.id}>
                  <Link to={`/people/${data.id}`}>
                    <Bgimg $bgUrl={data.profile_path} />
                  </Link>
                  <Sertitle>{data.name}</Sertitle>
                </Con>
              ))}
            </ConWrap>
          </>
        )}
      </Box>
    </Div>
  );
};
