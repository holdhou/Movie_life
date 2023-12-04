const fetch = require("node-fetch");
const baseurl = "https://api.themoviedb.org/3/";
/* const nowplayingurl = baseurl + "movie/now_playing" + "?language=ko-kr";
const popularurl = baseurl + "movie/popular" + "?language=ko-kr";
const topratingurl = baseurl + "movie/top_rated" + "?language=ko-kr";
const upcomingurl = baseurl + "movie/upcoming" + "?language=ko-kr"; */

const url = (urlName) => {
  return baseurl + `${urlName}` + "?language=ko-kr";
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMzlhMWU3YjAwMzk0YjRjM2FjNWEyM2IzZDNhYSIsInN1YiI6IjY1NGIzYTBmMWFjMjkyN2IyZGNmNTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k8U5KZQA4vEtL4f6fWe5kGf1eJ8ub5E4MEkgRK7Bgbw",
  },
};

export const nowplaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const top_rated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const moviedetail = (movieid) => {
  const moviedetailUrl = baseurl + `movie/${movieid}` + "?language=ko-kr";
  return fetch(moviedetailUrl, options).then((res) => res.json());
};

export const moviecredits = (moviecredits) => {
  const moviecreditsUrl =
    baseurl + `movie/${moviecredits}/credits` + "?language=ko-kr";
  return fetch(moviecreditsUrl, options).then((res) => res.json());
};

/*V tv시리즈 api V*/
export const seriesdetail = (seriesid) => {
  const seriesdetailUrl = baseurl + `tv/${seriesid}` + "?language=ko-kr";
  return fetch(seriesdetailUrl, options).then((res) => res.json());
};

export const aggregate_credits = (aggregateid) => {
  const aggregateUrl =
    baseurl + `tv/${aggregateid}/credits` + "?language=ko-kr";
  return fetch(aggregateUrl, options).then((res) => res.json());
};

/* 검색api */
export const searchapi = (searchid) => {
  const searchUrl = baseurl + `search/multi?query=${searchid}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

/* 배우및감독 api */
export const peopleapi = (peopleid) => {
  const peopleUrl =
    baseurl + `person/${peopleid}` + "?language=ko-kr";
  return fetch(peopleUrl, options).then((res) => res.json());
};
export const peoplecreaditapi = (peopleid) => {
  const peopleUrl =
    baseurl + `person/${peopleid}/combined_credits` + "?language=ko-kr";
  return fetch(peopleUrl, options).then((res) => res.json());
};

export const peopletranslationsapi = (peopleid) => {
  const peopleUrl =
    baseurl + `person/${peopleid}/translations` + "?language=ko-kr";
  return fetch(peopleUrl, options).then((res) => res.json());
};