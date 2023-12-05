import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { moviecredits, moviedetail } from "../../api";
import { IMG_URL } from "../../constants";
import { Loading } from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { PageTitle } from "../../components/PageTitle";
import { Noimg } from "../../components/Noimg";
const Container = styled.div`
  padding: 100px 0;
  display: flex;

  @media screen and (max-width: 1079px) {
    flex-direction: column;
    padding: 100px 0;
  }
`;

const Backimg = styled.div`
  width: 600px;
  height: 800px;
  background: ${(props) =>
    props.$bgUrl
      ? `url(${IMG_URL}/original/${props.$bgUrl}) no-repeat center / contain`
      : `url(${Noimg}) no-repeat center / contain`};
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

const Genress = styled.ul`
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
    margin-top: 10px;
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
  padding-top: 20px;
  border-top: 4px solid gray;
`;
const Castimg = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid black;

  background: ${(props) =>
    props.$bgUrl
      ? `url(${IMG_URL}/original/${props.$bgUrl}) no-repeat center / cover`
      : `url(${Noimg}) no-repeat center / cover`};
`;
const Cast = styled.div`
  width: 150px;
  margin-bottom: 20px;
  padding: 5px 5px 0 5px;
`;

const Runtime = styled.div``;
const Castname = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
const Ch = styled.div``;

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
      slidesPerView: 7.2,
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
export const Detaillist = () => {
  const { id } = useParams();
  const [moviedetailData, setmovieDetailData] = useState();
  const [moviedetail2Data, setmovieDetail2Data] = useState();
  const [moviecreditsData, setmoviecreditsData] = useState();
  const [moviecredits2Data, setmoviecredits2Data] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await moviedetail(id);
        setmovieDetailData(detailData);
        const detail2Data = await moviedetail(id);
        setmovieDetail2Data(detailData);

        const creditsData = await moviecredits(id);
        setmoviecreditsData(creditsData);
        const credits2Data = await moviecredits(id);
        setmoviecredits2Data(credits2Data);

        setLoading(false);
      } catch (error) {
        console.log("error" + error);
      }
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageTitle titleName="Movie Detail" />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Backimg $bgUrl={moviedetailData.poster_path} />
          <Con>
            <Title>{moviedetailData.title}</Title>
            <Rated>평점{moviedetailData.vote_average.toFixed(1)}</Rated>
            <Genress>
              {moviedetailData.genres.map((genres) => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </Genress>
            <Release>{moviedetailData.release_date}</Release>
            <Runtime>상영시간{moviedetailData.runtime}분</Runtime>
            <Overview>{moviedetailData.overview}</Overview>
          </Con>
        </Container>
      )}

      <Castlist>감독 및 스태프</Castlist>
      {moviecredits2Data && (
        <CharacterSwiper
          {...params}
          scrollbar={{ draggable: true, dragSize: 30 }}
        >
          {Array.from(
            new Map(
              moviecredits2Data.crew.map((crew) => [crew.name, crew])
            ).values()
          ).map((crew) => (
            <SwiperSlide key={crew.id}>
              <Link to={`/people/${crew.id}`}>
                <Castimg $bgUrl={crew.profile_path}></Castimg>
              </Link>
              <Cast>
                <Castname>{crew.name}</Castname>
                <Ch>직책: {crew.known_for_department}</Ch>
              </Cast>
            </SwiperSlide>
          ))}
        </CharacterSwiper>
      )}

      <Castlist>출연진</Castlist>
      {moviecreditsData && (
        <CharacterSwiper
          {...params}
          scrollbar={{ draggable: true, dragSize: 30 }}
        >
          {moviecreditsData.cast.map((cast) => (
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
