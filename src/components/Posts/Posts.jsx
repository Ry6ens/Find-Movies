import styles from "./Post.module.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Moment from "react-moment";

import { fetchPopularMovie } from "../../service/api";

export default function Posts() {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  // const targetScroll = document.querySelector(".target-element");
  // const observer = new IntersectionObserver(
  //   (entries, observer) => {
  //     if (entries[0].isIntersecting) {
  //       setPage(page + 1);
  //     }
  //   },
  //   {
  //     root: null,
  //     rootMargin: "400px",
  //     threshold: 1,
  //   }
  // );
  // observer.observe(targetScroll);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      try {
        const data = await fetchPopularMovie();
        setMovies([...data.results]);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  // useEffect(() => {
  //   loadMoreData();

  //   async function loadMoreData() {
  //     try {
  //       const data = await fetchPopularMovie(page);

  //       // if (data.results.length === 0) {
  //       //   console.log("unobserve");
  //       //   observer.unobserve(targetScroll);
  //       //   return;
  //       // }

  //       setMovies([...movies, ...data.results]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);

  return (
    <ul className={styles.postsList}>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles.postsItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                width="172"
              />
              <h2 className={styles.postTitle}>{movie.title}</h2>
              <Moment className={styles.postDate} format="YYYY">
                {movie.release_date}
              </Moment>
            </Link>
          </li>
        ))}
    </ul>
  );
}
