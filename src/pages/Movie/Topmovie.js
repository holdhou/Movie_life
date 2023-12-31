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
 margin: 75px 0;
`;
const Imgnumber = styled.h4`
  font-size: 40px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const CoverImg = styled.div`
  height: 350px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center;
  background-size: cover;
  margin-bottom: 20px;
  border-radius: 15px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);

    & ${Imgnumber} {
      opacity: 0; //
    }
  }

  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;

const CoverImgtitle = styled.div`
  font-size: 25px;
  text-align: left;
  font-weight: 900;
`;

const CustomSwiper = styled(Swiper)`

  .swiper-button-next,
  .swiper-button-prev {
    height: 100px;
    color: white;
    top: 40%;
    background-color: rgba(0,0,0,0.5);
    
    @media screen and (max-width: 1079px) {
      display: none; /
    }
  }
`;
const Title = styled.section`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;
const params = {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 5.5,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "navigation_block",
  },

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    300: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
  on: {
    slideChange: function () {},
  },
};

export const Topmovie = ({ TitleName, Moviedata }) => {
  return (
    <>
      <Layout>
        <Title>{TitleName}</Title>
        <CustomSwiper {...params} loop={true} navigation>
          {Moviedata.slice(0, 10).map((data, index) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <CoverImg $bgUrl={data.poster_path}>
                  <Imgnumber>TOP {index + 1}</Imgnumber>
                </CoverImg>
                <CoverImgtitle>{data.title}</CoverImgtitle>
              </Link>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Layout>
    </>
  );
};
