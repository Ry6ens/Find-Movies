// import styles from "./ImgEmbed.module.scss";
import PropTypes from "prop-types";
import plugImg from "../../../img/plugIMG.jpg";

export default function ImgEmbed({ movie }) {
  return (
    <>
      {movie.poster_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          width="220"
        />
      ) : (
        <img src={plugImg} alt="" width="220"></img>
      )}
    </>
  );
}

ImgEmbed.propType = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
    })
  ),
};
