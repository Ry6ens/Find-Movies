import styles from "./AdditionalTitle.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as IconArrowRight } from "../../../img/arrowRight.svg";

export default function AdditionalTitle({ title }) {
  return (
    <h3 className={styles.additionalTitle}>
      <span>{title}</span>
      <IconArrowRight className={styles.additionalArrow} />
    </h3>
  );
}

AdditionalTitle.protoType = {
  title: PropTypes.string.isRequired,
};
