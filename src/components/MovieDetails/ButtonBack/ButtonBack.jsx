import styles from "./ButtonBack.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as IconArrowLeft } from "../../../img/arrowLeft.svg";
import { Link } from "react-router-dom";

export default function ButtonBack({ backLinkHref }) {
  return (
    <div className={styles.btnBack}>
      <Link to={backLinkHref}>
        <IconArrowLeft className={styles.iconArrowLeft} />
        Go Back
      </Link>
    </div>
  );
}

ButtonBack.propType = {
  backLinkHref: PropTypes.object,
};
