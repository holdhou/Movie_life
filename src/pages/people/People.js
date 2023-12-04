import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import { peopleapi, peoplecreaditapi, peopletranslationsapi } from "../../api";
import { IMG_URL } from "../../constants";

const Con = styled.div``;
const Crewtitle = styled.div`
font-size: 30px;
margin: 20px 0;
font-weight: 900;

`;
const Casttitlename = styled.div`
padding: 5% ;
font-weight: 600;
width: 10vw;
`;
const Crewtitlebox = styled.div`
display: flex;
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

  margin-top: 5%;
`;
const Crewimg = styled.div`
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;
  height: 400px;
  width: 300px;
`;
const Posterimg = styled.div`
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;
    margin: 0 10px ;
  height: 200px;
  width: 10vw;
  border: 1px solid black;
`;
export const People = () => {
  const { id } = useParams();
  const [peoplesData, setpeopleData] = useState();
  const [peoplescreditsData, setpeoplescreditsDataData] = useState();
  const [peoplestranslationsData, setpeoplestranslationsData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const peopleData = await peopleapi(id);
        setpeopleData(peopleData);

        const peoplecreditData = await peoplecreaditapi(id);
        setpeoplescreditsDataData(peoplecreditData);

        const peopletranslationData = await peopletranslationsapi(id);
        setpeoplestranslationsData(peopletranslationData);

        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
    window.scrollTo(0, 0);
  }, []);
  console.log(peoplescreditsData);
  return (
    <div>
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
            <crew key={cast.id}>
              <Link to={`/detail/${cast.id}`}>  

              <Posterimg $bgUrl={cast.poster_path}></Posterimg>
              </Link>

              <Casttitlename>{cast.title}</Casttitlename>
            </crew>
          ))}
        </Crewtitlebox>
      )}
    </div>
  );
};
