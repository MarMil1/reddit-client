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
    <div className={styles.filterContainer}>
      <div className={styles.filterSubContainer}>
        <Link to="popular/hot" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "hot" ? styles.active : ""
            }`}
            onClick={() => handleIsActiveClick("hot")}
          >
            <div className={styles.filterIcon}>&#9832;</div>
            <span className={styles.filterName}>Hot</span>
          </div>
        </Link>
        <Link to="popular/new" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "new" ? styles.active : ""
            }`}
            onClick={() => handleIsActiveClick("new")}
          >
            <div className={styles.filterIcon}>&#10040;</div>
            <span className={styles.filterName}>New</span>
          </div>
        </Link>
        <Link to="popular/top" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "top" ? styles.active : ""
            }`}
            onClick={() => handleIsActiveClick("top")}
          >
            <div className={`${styles.filterIcon} ${styles.topIcon}`}>
              &#10154;
            </div>
            <span className={styles.filterName}>Top</span>
          </div>
        </Link>
        <Link to="popular/rising" className={styles.textLink}>
          <div
            className={`${styles.filterItem} ${
              postCategory === "rising" ? styles.active : ""
            }`}
            onClick={() => handleIsActiveClick("rising")}
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
