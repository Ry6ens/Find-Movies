import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "9bc0101e379e5e6c089a5fdeff30de32" },
});

export const fetchPopularMovie = async (page = 1) => {
  const { data } = await instance.get("/trending/movie/day", {
    params: { page },
  });
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await instance.get("/search/movie", { params: { query } });
  return data;
};

export const fetchGetMovieDetails = async (movie_id) => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const fetchGetMovieCredits = async (movie_id) => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchGetMovieReviews = async (movie_id) => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`);
  return data;
};

export const fetchGetMovieVideo = async (movie_id) => {
  const { data } = await instance.get(`/movie/${movie_id}/videos`);
  return data;
};
