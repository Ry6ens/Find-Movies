// import styles from "./YoutubeEmbed.module.scss";

import { fetchGetMovieVideo } from "../../service/api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function YoutubeEmbed() {
  const { movieId } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideo();

    async function fetchVideo() {
      try {
        const data = await fetchGetMovieVideo(movieId);
        setVideo(data);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      {video &&
        video.results.map(({ id, key, name }) => {
          if (name !== "Official Trailer") {
            return <></>;
          }
          return (
            <div key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${key}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="1000"
                height="330"
              />
            </div>
          );
        })}
    </>
  );
}
