import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";
import { aggregate_credits, seriesdetail } from "../../api";
import { Loading } from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  padding: 100px 0 ;
  display: flex;
  
  @media screen and (max-width: 1079px) {
    flex-direction: column;
    padding: 100px 0;
  }
`;

const Backimg = styled.div`
  width: 600px;
  height: 800px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    contain;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const Con = styled.div`
  width: 55%;
  font-size: 20px;
  margin-left: 3%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Overview = styled.p`
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid white;
  padding-top: 50px;
  line-height: 35px;
  font-weight: 300;

  @media screen and (max-width: 450px) {
    max-width: 100%;
  }
`;

const Rated = styled.div`
  font-weight: 600;
`;

const Genres = styled.ul`
  margin: 20px 0;

  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const Release = styled.div`
  margin-bottom: 20px;
`;

const CharacterSwiper = styled(Swiper)`
  font-size: 18px;
  margin-top: 20px;

  .swiper-scrollbar {
    height: 10px;
  }
  .swiper-scrollbar-drag {
    border-radius: 4px;
  }

  @media screen and (max-width: 1079px) {
    justify-content: flex-start;
  }
`;

const Castlist = styled.div`
  height: 100%;
  margin-top: 15px;
  font-size: 1.4em;
  border-top: 4px solid gray;
`;
const Seasonlist = styled.div`
  height: 100%;
  margin-top: 15px;
  font-size: 1.4em;
  border-top: 4px solid gray;
  margin-bottom: 20px;
`;
const Castimg = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid black;

  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;
const Castname = styled.div`
  width: 150px;
  font-weight: 900;
  word-wrap: break-word;
`;
const Ch = styled.div`
  width: 150px;
  margin-bottom: 20px;

  word-wrap: break-word;
`;
const Cast = styled.div`
  padding: 5px 5px 0 5px;
`;
const Div = styled.div`
  padding: 5px 5px 0 5px;
`;

const Seasonimg = styled.div`
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 200px;
  border: 1px solid black;
`;
const Seasonname = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;
const Seasonopenday = styled.h3`
  font-size: 20px;
`;

const Season = styled.div`
  margin-bottom: 20px;
`;
const params = {
  modules: [Scrollbar],
  spaceBetween: 15,
  slidesPerView: 10,

  breakpoints: {
    1920: {
      slidesPerView: 10,
    },
    1080: {
      spaceBetween: 15,
      slidesPerView: 6,
    },
    640: {
      spaceBetween: 10,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 15,
      slidesPerView: 2.1,
    },
  },
};

export const Seriesdetail = () => {
  const { id } = useParams();
  const [seriesdetailData, setseriesDetailData] = useState();
  const [aggregateData, setaggregateData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await seriesdetail(id);
        setseriesDetailData(detailData);

        const aggregateData = await aggregate_credits(id);
        setaggregateData(aggregateData);

        setLoading(false);
      } catch (error) {
        console.log("error" + error);
      }
    })();
    window.scrollTo(0, 0);
  }, []);

  

  return (
    
    <div>
      <PageTitle titleName="Series Detail" />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Backimg $bgUrl={seriesdetailData.poster_path} />
          <Con>
            <Title>{seriesdetailData.name}</Title>

            <Rated>평점{seriesdetailData.vote_average.toFixed(1)}</Rated>
            <Genres>
              {seriesdetailData.genres.map((genres) => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </Genres>
            <Release>{seriesdetailData.release_date}</Release>
            <Overview>{seriesdetailData.overview}</Overview>
          </Con>
        </Container>
      )}

      <Seasonlist>시리즈 시즌</Seasonlist>
      {seriesdetailData && (
        <CharacterSwiper
          {...params}
          scrollbar={{ draggable: true, dragSize: 30 }}
        >
          {seriesdetailData.seasons.map((seasons) => (
            <SwiperSlide key={seasons.id}>
              <Season>
                <Seasonimg $bgUrl={seasons.poster_path}></Seasonimg>
                <Div>
                  <Seasonname>{seasons.name}</Seasonname>
                  <Seasonopenday>방영일:{seasons.air_date}</Seasonopenday>
                </Div>
              </Season>
            </SwiperSlide>
          ))}
        </CharacterSwiper>
      )}

      <Castlist>출연진</Castlist>
      {aggregateData && (
        <CharacterSwiper
          {...params}
          scrollbar={{ draggable: true, dragSize: 30 }}
        >
          {aggregateData.cast.map((cast) => (
            <SwiperSlide key={cast.id}>
              <Link to={`/people/${cast.id}`}>
                <Castimg $bgUrl={cast.profile_path}></Castimg>
              </Link>
              <Cast>
                <Castname>{cast.name}</Castname>
                <Ch>{cast.character}</Ch>
              </Cast>
            </SwiperSlide>
          ))}
        </CharacterSwiper>
      )}
    </div>
  );
};
