import styled from "styled-components";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

register();

const Layout = styled.section`
  margin: 0 0 10px 0;
`;

const Title = styled.section`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 10px;
  

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;
const CoverImg = styled.div`

  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
  border: 3px solid black;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
    background-size: cover;
  }

  
`;

const CoverImgtitle = styled.div`
font-size: 20px;
font-weight: 700;

`;

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    height: 100px;
    
    color: #ffffff;
    top: 40%;
    background-color: rgba(0,0,0,0.5);
    
    @media screen and (max-width: 1079px) {
      display: none; /
    }
  }
`;

const params = {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "navigation_block",
  },

  breakpoints: {
    1920: {
      spaceBetween: 20,
      slidesPerView: 8.3,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 6.3,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.2,
    },
  },
};

export const Movietag = ({ TitleName, Moviedata }) => {
  return (
    <>
      <Layout>
        <Title>{TitleName}</Title>
        <CustomSwiper {...params}loop={true} navigation>
          {Moviedata.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <CoverImg $bgUrl={data.poster_path}></CoverImg>
                <CoverImgtitle>{data.title}</CoverImgtitle>
              </Link>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Layout>
    </>
  );
};
