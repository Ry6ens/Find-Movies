import styles from "./NotFoundPage.module.scss";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  var pageX = $(document).width();
  var pageY = $(document).height();
  var mouseY = 0;
  var mouseX = 0;

  $(document).mousemove(function (event) {
    //verticalAxis
    mouseY = event.pageY;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

    //horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $("#boxGhostEyes").css({
      transform: "translate(" + xAxis + "%,-" + yAxis + "%)",
    });

    //console.log('X: ' + xAxis);
  });

  return (
    <div className={styles.box}>
      <div className={styles.boxGhost}>
        <div className={styles.symbol}></div>
        <div className={styles.symbol}></div>
        <div className={styles.symbol}></div>
        <div className={styles.symbol}></div>
        <div className={styles.symbol}></div>
        <div className={styles.symbol}></div>

        <div className={styles.boxGhostContainer}>
          <div className={styles.boxGhostEyes} id="boxGhostEyes">
            <div className={styles.boxEyeLeft}></div>
            <div className={styles.boxEyeRight}></div>
          </div>
          <div className={styles.boxGhostBottom}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.boxGhostShadow}></div>
      </div>

      <div className={styles.boxDescription}>
        <div className={styles.boxDescriptionContainer}>
          <div className={styles.boxDescriptionTitle}>Whoops!</div>
          <div className={styles.boxDescriptionText}>
            It seems like we couldn't find the page you were looking for
          </div>
        </div>

        <Link to={backLinkHref} className={styles.boxButton}>
          Go Back
        </Link>
      </div>
    </div>
  );
}
