// import styles from "./Movies.module.scss";

import SearchBox from "../../components/SearchBox/SearchBox";
import Posts from "../../components/Posts/Posts";
// import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { fetchSearchMovie, fetchPopularMovie } from "../../service/api";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";

export default function Movies() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const q = searchParams.get("q");

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
    const fetchSearchMovies = async () => {
      try {
        const data = await fetchSearchMovie(q);
        console.log(data);
        if (data.total_results === 0) {
          Notiflix.Notify.warning("No hits. Try again");
        }
        setItems([...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    if (q) {
      observer.observe(targetScroll.current);
      fetchSearchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useEffect(() => {
    if (items.length > 0) {
      loadMoreData();
    }

    async function loadMoreData() {
      try {
        const data = await fetchPopularMovie(page);

        if (data.results.length === 0) {
          console.log("unobserve");
          observer.unobserve(targetScroll);
          return;
        }

        setItems([...items, ...data.results]);
      } catch (error) {
        console.error(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onSearch = (q) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, q });
    setItems([]);
  };

  return (
    <main>
      <SearchBox getSearch={onSearch} />
      <Posts movies={items} />
      <div className="target-element" ref={targetScroll}></div>
    </main>
  );
}
