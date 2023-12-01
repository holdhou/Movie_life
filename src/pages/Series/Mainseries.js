import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { IMG_URL } from "../../constants";
const Mainbanner = styled.section`
  width: 100%;
  height: 90vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center;
  background-size: cover;

  padding: 25% 5%;
  h3 {
    max-width: 600px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    line-height: 25px;
    max-width: 600px;
    width: 100%;
    
  }
`;

const Title = styled.div`
  font-size: 38px;

  top: 1%;
  font-weight: 500;
`;
const Playbutton = styled.ul`
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

    background-color: #868f94;
  }
`;

const More_information = styled.div`
  padding: 3%5%;
  border-radius: 15px;
  background-color: white;
  a {
    color: black;
  }
`;

export const Mainseries = ({ seriesdata }) => {
  const VoteAverage = seriesdata.vote_average.toFixed(1);
  return (
    <Mainbanner $bgUrl={seriesdata.backdrop_path}>
      <Title>시리즈</Title>
      <h3>{seriesdata.name}</h3>
      <p>{seriesdata.overview.slice(0, 100) + "..."}</p>
      <Playbutton>
        <More_information>
          <Link to={routes.detail}>상세정보</Link>
        </More_information>
        <li>{VoteAverage}</li>
      </Playbutton>
    </Mainbanner>
  );
};
