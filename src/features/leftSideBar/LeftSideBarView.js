import React from "react";
import styles from "./leftSideBarView.module.css";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import filterStyles from "../filter/filterView.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../filter/filterSlice";
import { fetchPosts } from "../posts/postSlice";
import AskRedditImg from "../../assets/AskReddit.png";
import funnyImg from "../../assets/funny.png";
import WorldNewsImg from "../../assets/worldnews.png";
import politicsImg from "../../assets/politics.png";
import sportsImg from "../../assets/sports.png";
import memesImg from "../../assets/memes.png";

export const LeftSideBarView = () => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.filter.postCategory);

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
              postCategory === ".json" || postCategory === "/.json"
                ? styles.activeFeedItem
                : ""
            }`}
            onClick={() => handleIsActiveClick(".json")}
          >
            <HomeIcon sx={{ marginRight: 1, color: "#333333" }} /> Home
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
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/popular.json")}
          >
            <AutoGraphIcon sx={{ marginRight: 1, color: "#333333" }} /> Popular
          </div>
        </Link>
        <div className={styles.feedsTitle} style={{ marginTop: "30px" }}>
          Communities
        </div>
        <Link
          to="r/AskReddit"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/AskReddit.json" ||
              postCategory === "/r/AskReddit.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/AskReddit.json")}
          >
            <img
              className={styles.subredditImage}
              src={AskRedditImg}
              alt="subreddit"
            />
            AskReddit
          </div>
        </Link>
        <Link
          to="r/funny"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/funny.json" ||
              postCategory === "/r/funny.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/funny.json")}
          >
            <img
              className={styles.subredditImage}
              src={funnyImg}
              alt="subreddit"
            />
            Funny
          </div>
        </Link>
        <Link
          to="r/funny"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/worldnews.json" ||
              postCategory === "/r/worldnews.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/worldnews.json")}
          >
            <img
              className={styles.subredditImage}
              src={WorldNewsImg}
              alt="subreddit"
            />
            WorldNews
          </div>
        </Link>
        <Link
          to="r/politics"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/politics.json" ||
              postCategory === "/r/politics.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/politics.json")}
          >
            <img
              className={styles.subredditImage}
              src={politicsImg}
              alt="subreddit"
            />
            Politics
          </div>
        </Link>
        <Link
          to="r/sports"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/sports.json" ||
              postCategory === "/r/sports.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/sports.json")}
          >
            <img
              className={styles.subredditImage}
              src={sportsImg}
              alt="subreddit"
            />
            Sports
          </div>
        </Link>
        <Link
          to="r/memes"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <div
            className={`${styles.feedItem} ${
              postCategory === "r/memes.json" ||
              postCategory === "/r/memes.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px", marginBottom: "50px" }}
            onClick={() => handleIsActiveClick("r/memes.json")}
          >
            <img
              className={styles.subredditImage}
              src={memesImg}
              alt="subreddit"
            />
            Memes
          </div>
        </Link>
      </div>
    </div>
  );
};
