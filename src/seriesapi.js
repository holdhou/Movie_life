const fetch = require("node-fetch");

const baseurl = "https://api.themoviedb.org/3/";
const AiringTodayurl = baseurl + "tv/airing_today" + "?language=ko-kr";
const on_the_airurl = baseurl + "tv/on_the_air" + "?language=ko-kr";
const Popularurl = baseurl + "tv/popular" + "?language=ko-kr";
const TopRatedurl = baseurl + "tv/top_rated" + "?language=ko-kr";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMzlhMWU3YjAwMzk0YjRjM2FjNWEyM2IzZDNhYSIsInN1YiI6IjY1NGIzYTBmMWFjMjkyN2IyZGNmNTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k8U5KZQA4vEtL4f6fWe5kGf1eJ8ub5E4MEkgRK7Bgbw",
  },
};

export const Airing_Today = () =>
  fetch(AiringTodayurl, options).then((res) => res.json());
export const on_the_air = () =>
  fetch(on_the_airurl, options).then((res) => res.json());
export const Popular = () =>
  fetch(Popularurl, options).then((res) => res.json());
export const TopRated = () =>
  fetch(TopRatedurl, options).then((res) => res.json());
