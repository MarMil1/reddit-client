import React from "react";
import styles from "./leftSideBarView.module.css";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import filterStyles from "../filter/filterView.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../filter/filterSlice";
import { fetchPosts } from "../posts/postSlice";

export const LeftSideBarView = () => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.filter.postCategory);
  console.log(postCategory, "Post Category");
  const handleIsActiveClick = (e) => {
    dispatch(updateCategory(e));
    dispatch(fetchPosts(e));
  };
  return (
    <div className={styles.leftSideBarContainer}>
      <div className={styles.feedsTitle}>Feeds</div>
      <div className={styles.feedsContainer}>
        <Link
          to="/"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === ".json" ? styles.activeFeedItem : ""
            }`}
            onClick={() => handleIsActiveClick(".json")}
          >
            <HomeIcon sx={{ marginRight: 1 }} /> Home
          </div>
        </Link>
        <Link
          to="r/popular"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
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
                ? styles.activeFeedItem
                : ""
            }`}
            onClick={() => handleIsActiveClick("r/popular.json")}
          >
            <AutoGraphIcon sx={{ marginRight: 1 }} /> Popular
          </div>
        </Link>
      </div>
    </div>
  );
};
