import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { nowplaying, popular, top_rated, upcoming } from "../../api";
import { Mainmovie } from "./Mainmovie";
import { Topmovie } from "./Topmovie";
import { Movietag } from "./Movietag";
import { Upcoming } from "./Upcoming";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

export const Movie = () => {
  const [nowplayData, setnowplayData] = useState();
  const [popularData, setpopularData] = useState();
  const [topratedData, settopratedData] = useState();
  const [upcomingData, setupcomingData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: nowResylts } = await nowplaying();
        setnowplayData(nowResylts);

        const { results: popResylts } = await popular();
        setpopularData(popResylts);

        const { results: topResylts } = await top_rated();
        settopratedData(topResylts);

        const { results: upcomingResylts } = await upcoming();
        setupcomingData(upcomingResylts);

        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);
  console.log(nowplayData);
  console.log(loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {nowplayData && (
            <>
              <PageTitle titleName="Movie" />
              <Mainmovie data={nowplayData[0]} />
              <Topmovie TitleName={"인기영화TOP10"} Moviedata={popularData} />
              <Movietag TitleName={"추천Movie"} Moviedata={topratedData} />
              <Movietag
                TitleName={"현재상영중인 영화"}
                Moviedata={nowplayData}
              />
              <Upcoming TitleName={"개봉예정 영화"} Moviedata={upcomingData} />
            </>
          )}
        </>
      )}
    </>
  );
};
