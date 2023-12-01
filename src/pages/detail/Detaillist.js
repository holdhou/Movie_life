import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detaillist } from "../../api";
import styled from "styled-components";
const Container = styled.div``;
const Bgimg = styled.div``;
const Listtag = styled.div``;
const Title = styled.h3``;
const Genres = styled.div``;
const Runtime = styled.div``;
const Release = styled.div``;
export const Detaillist = () => {
  const { id } = useParams();
  const { detaillistData, setDetaillistData } = useState();
  const { loading, setLoding } = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await detaillist(id);
        setDetaillistData(data);
        setLoding(false);
        
      } catch (error) {
        console.log("error" + error);
      }
    })();
  }, []);
  
  return (
    <div>
      {loading ? (
        <loading />
      ) : (
        <Container>
          <Bgimg $bgUrl={detaillistData.backdrop_path} />
          <Listtag>
            <Title>{detaillistData.title}</Title>
            <Genres>{detaillistData.vote_average}</Genres>
            <Release>{detaillistData.release_data}</Release>
            <Runtime>{detaillistData.runtime}</Runtime> 
          </Listtag>
        </Container>
      )}
    </div>
  );
};
