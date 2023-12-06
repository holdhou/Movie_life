import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";
import { Noimg } from "../../components/Noimg";

const Mainvideo = styled.section`
  background: ${(props) =>
    props.$bgUrl
      ? `linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(128, 128, 128, 0.4) 30%,
          rgba(255, 255, 255, 0) 100%
        ), url(${IMG_URL}/original/${props.$bgUrl}) no-repeat center / cover`
      : `linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(128, 128, 128, 0.4) 36%,
          rgba(255, 255, 255, 0) 100%
        ), url(${Noimg}) no-repeat center / cover`};
  height: 90vh;

  padding: 40vh 0;
  margin: 0% -5.5%;
  
  color: white;
  h3 {
    max-width: 600px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-left: 5%;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    line-height: 25px;
    max-width: 600px;
    width: 100%;
    margin-left: 5%;
  }
  @media screen and (max-width: 500px) {
    p {
      display: none;
    }
    h3 {
      font-size: 60px;
    }
  }
`;

const Title = styled.div`
  font-size: 38px;
  color: white;
  top: 1%;
  font-weight: 500;
  margin-left: 5%;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }

`;

const Playbutton = styled.ul`
 margin-left: 5%;
  width: 220px;
  display: flex;
  justify-content: space-between;
  float: left;
  font-size: 30px;
  margin-top: 30px;
  font-weight: 900;
  text-align: center;
  line-height: 45px;
  li:last-child {
    width: 50px;
    height: 50px;
    margin-left: 5%;
    border-radius: 50%;
    background-color: #0390d2;
  }
  @media screen and (max-width: 500px) {
    margin-top: 0px;
  }
`;

const More_information = styled.div`

  padding: 3%5%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  a {
    color: black;
  }
`;

export const Mainmovie = ({ data }) => {
  const VoteAverage = data.vote_average.toFixed(1);
  return (
    <Mainvideo $bgUrl={data.backdrop_path}>
      <Title>영화</Title>
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
      <Playbutton>
        <More_information>
          <Link to={`/detail/${data.id}`}>상세정보</Link>
        </More_information>
        <li>{VoteAverage}</li>
      </Playbutton>
    </Mainvideo>
  );
};
