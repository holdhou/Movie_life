import styled from "styled-components";
import { Link } from "react-router-dom";

import { IMG_URL } from "../../constants";
import { Noimg } from "../../components/Noimg";
const Mainbanner = styled.section`
  height: 90vh;
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
  background-size: cover;
  
  padding-top:40vh;
  h3 {
    margin-left: 5%;
    max-width: 600px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
    
  }
  p {
    margin-left: 5%;
    font-size: 18px;
    line-height: 25px;
    max-width: 600px;
    width: 100%;
  }
  color:white;
  margin: 0% -5.5%;
  @media screen and (max-width: 560px) {
   
    p {
      display: none;
    }
    h3{
      font-size:60px;
    }
  }
`;

const Title = styled.div`
margin-left: 5%;
  font-size: 38px;
  top: 1%;
  font-weight: 500;
  @media screen and (max-width: 560px) {
   
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
`;

const More_information = styled.div`
  padding: 3%5%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.41);
  a {
    color: white;
  }
`;

export const Mainseries = ({ seriesdata }) => {
  const VoteAverage = seriesdata.vote_average.toFixed(1);
  return (
    <>
      <Mainbanner $bgUrl={seriesdata.backdrop_path}>
        <Title>시리즈</Title>
        <h3>{seriesdata.name}</h3>
        <p>{seriesdata.overview.slice(0, 100) + "..."}</p>
        <Playbutton>
          <More_information>
            <Link to={`/seriesdetail/${seriesdata.id}`}>상세정보</Link>
          </More_information>
          <li>{VoteAverage}</li>
        </Playbutton>
      </Mainbanner>
    </>
  );
};
