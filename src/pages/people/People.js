import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import { peopleapi, peoplecreaditapi, peopletranslationsapi } from "../../api";
import { IMG_URL } from "../../constants";
import { PageTitle } from "../../components/PageTitle";
import { Noimg } from "../../components/Noimg";

const Con = styled.div`
  margin-left: 10px;
`;
const Crew = styled.div`
  
  
`;
const Crewtitle = styled.div`
  font-size: 30px;
  margin: 20px 0;
  font-weight: 900;
`;
const Casttitlename = styled.div`
  padding: 5%;
  font-weight: 600;
  width: 10vw;
  grid-template-columns: repeat(7, 1fr);
`;
const Crewtitlebox = styled.div`
 display:flex;
 
`;
const Castjop = styled.div`
  font-size: 25px;
`;
const Castbir = styled.div`
  font-size: 25px;
`;

const Castname = styled.div`
  font-size: 25px;
  font-weight: 900;
`;
const Crewbox = styled.div`
  display: flex;

  margin-top: 10vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 100px 0;
  }
`;
const Crewimg = styled.div`
  background: ${(props) =>
    props.$bgUrl
      ? `url(${IMG_URL}/original/${props.$bgUrl}) no-repeat center / cover`
      : `url(${Noimg}) no-repeat center / cover`};
  height: 400px;
  width: 300px;
  border: 1px solid;
`;
const Posterimg = styled.div`
  background: ${(props) =>
    props.$bgUrl
      ? `url(${IMG_URL}/original/${props.$bgUrl}) no-repeat center / cover`
      : `url(${Noimg}) no-repeat center / cover`};
  margin: 0 10px;
  height: 300px;
  width: 200px;
  border: 1px solid black;
  @media screen and (max-width: 1400px){
    width: 150px;;
  
  }
`;
export const People = () => {
  const { id } = useParams();
  const [peoplesData, setpeopleData] = useState();
  const [peoplescreditsData, setpeoplescreditsDataData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const peopleData = await peopleapi(id);
        setpeopleData(peopleData);

        const peoplecreditData = await peoplecreaditapi(id);
        setpeoplescreditsDataData(peoplecreditData);

        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageTitle titleName="Peoples" />
      {loading ? (
        <Loading />
      ) : (
        <Crewbox>
          <Crewimg $bgUrl={peoplesData.profile_path} />
          <Con>
            <Castname>{peoplesData.name}</Castname>
            <Castjop>직업: {peoplesData.known_for_department}</Castjop>
            <Castbir>출생년도: {peoplesData.birthday}</Castbir>
          </Con>
        </Crewbox>
      )}

      <Crewtitle>
        <h3>주요작품</h3>
      </Crewtitle>
      {peoplescreditsData && (
        <Crewtitlebox>
          {peoplescreditsData.cast.slice(0, 6).map((cast) => (
            <Crew key={cast.id}>
              <Link to={`/detail/${cast.id}`}>
                <Posterimg $bgUrl={cast.poster_path}></Posterimg>
              </Link>

              <Casttitlename>{cast.title}</Casttitlename>
            </Crew>
          ))}
        </Crewtitlebox>
      )}
    </div>
  );
};
/* .slice(0, 6) */
