import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Mainseries } from "./Mainseries";
import { Airing_Today, Popular, on_the_air } from "../../seriesapi";
import { Seriestag } from "./Seriestag";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Series = () => {
  const [AiringTodayData, setAiringTodayData] = useState();
  const [ontheairData, setontheairData] = useState();
  const [PopularData, setPopularData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: todayResults } = await Airing_Today();
        setAiringTodayData(todayResults);

        const { results: ontheairResults } = await on_the_air();
        setontheairData(ontheairResults);

        const { results: PopularResults } = await Popular();
        setPopularData(PopularResults);

        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageTitle titleName="Series" />
      {loading ? (
        <Loading />
      ) : (
        <>
          {AiringTodayData && (
            <>
              <Mainseries seriesdata={AiringTodayData[3]} />
              <Seriestag Titlename={"방영중"} Seriesdata={ontheairData} />
              <Seriestag Titlename={"인기시리즈"} Seriesdata={PopularData} />
            </>
          )}
        </>
      )}
    </>
  );
};
