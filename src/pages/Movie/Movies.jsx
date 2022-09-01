// import styles from "./Movies.module.scss";

import SearchBox from "../../components/SearchBox/SearchBox";

// import { useEffect, useSearchParams } from "react";

export default function Movies() {
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   fetchSearchMovies();

  //   async function fetchSearchMovies() {
  //     try {
  //       const data = await fetchSearchMovie();
  //     } catch {}
  //   }
  // });

  return (
    <main>
      <SearchBox />
    </main>
  );
}
