import React from "react";
import styles from "./filterView.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../filter/filterSlice";
import { fetchPosts } from "../posts/postSlice";

export const FilterView = () => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.filter.postCategory);

  const handleIsActiveClick = (e) => {
    dispatch(updateCategory(e));
    dispatch(fetchPosts(e));
  };

  return (
    <div
      className={styles.filterContainer}
      style={{
        display:
          postCategory === "/r/popular.json" ||
          postCategory === "r/popular.json" ||
          postCategory === "/r/popular/hot.json" ||
          postCategory === "r/popular/hot.json" ||
          postCategory === "/r/popular/new.json" ||
          postCategory === "r/popular/new.json" ||
          postCategory === "/r/popular/top.json" ||
          postCategory === "r/popular/top.json" ||
          postCategory === "/r/popular/rising.json" ||
          postCategory === "r/popular/rising.json"
            ? "block"
            : "none",
      }}
    >
      <div className={styles.filterSubContainer}>
        <Link to="r/popular/hot" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "/r/popular/hot.json" ||
              postCategory === "r/popular/hot.json"
                ? styles.active
                : ""
            }`}
            onClick={() => handleIsActiveClick("r/popular/hot.json")}
          >
            <div className={styles.filterIcon}>&#9832;</div>
            <span className={styles.filterName}>Hot</span>
          </div>
        </Link>
        <Link to="r/popular/new" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "/r/popular/new.json" ||
              postCategory === "r/popular/new.json"
                ? styles.active
                : ""
            }`}
            onClick={() => handleIsActiveClick("r/popular/new.json")}
          >
            <div className={styles.filterIcon}>&#10040;</div>
            <span className={styles.filterName}>New</span>
          </div>
        </Link>
        <Link to="/r/popular/top" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "/r/popular/top.json" ||
              postCategory === "r/popular/top.json"
                ? styles.active
                : ""
            }`}
            onClick={() => handleIsActiveClick("r/popular/top.json")}
          >
            <div className={`${styles.filterIcon} ${styles.topIcon}`}>
              &#10154;
            </div>
            <span className={styles.filterName}>Top</span>
          </div>
        </Link>
        <Link to="r/popular/rising" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "/r/popular/rising.json" ||
              postCategory === "r/popular/rising.json"
                ? styles.active
                : ""
            }`}
            onClick={() => handleIsActiveClick("r/popular/rising.json")}
          >
            <div className={`${styles.filterIcon} ${styles.risingIcon}`}>
              &#10144;
            </div>
            <span className={styles.filterName}>Rising</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
