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

export const search = () =>
  fetch(url("search/multi"), options).then((res) => res.json());

/*   export const detaillist = () =>
  fetch(url(`movie/`), options).then((res) => res.json());  */

export const detaillist = (movie_id) => {
  const detailUrl = baseurl + `movie/${movie_id}` + "?language=ko-kr";
  return fetch(detailUrl, options).then((res) => res.json());
};
