import styles from "./Home.module.scss";

import Posts from "../../components/Posts/Posts";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Most Popular Movies</h1>
      <Posts />
      <div className="target-element"></div>
    </main>
  );
}

// https://image.tmdb.org/t/p/original
