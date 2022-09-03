import styles from "./Home.module.scss";

import Posts from "../../components/Posts/Posts";

import { useState, useEffect, useRef } from "react";
import { fetchPopularMovie } from "../../service/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const targetScroll = useRef(null);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    {
      root: null,
      rootMargin: "400px",
      threshold: 1,
    }
  );

  useEffect(() => {
    observer.observe(targetScroll.current);
    fetchMovies();

    async function fetchMovies() {
      try {
        const data = await fetchPopularMovie();
        setMovies([...data.results]);
      } catch (error) {
        console.error(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadMoreData();
    async function loadMoreData() {
      try {
        const data = await fetchPopularMovie(page);

        if (data.results.length === 0) {
          console.log("unobserve");
          observer.unobserve(targetScroll);
          return;
        }

        setMovies([...movies, ...data.results]);
      } catch (error) {
        console.error(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <main>
      <h1 className={styles.title}>Most Popular Movies</h1>
      <Posts movies={movies} />
      <div className="target-element" ref={targetScroll}></div>
    </main>
  );
}

// https://image.tmdb.org/t/p/original
