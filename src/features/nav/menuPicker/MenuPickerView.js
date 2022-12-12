import * as React from "react";
import styles from "./menuPickerView.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../filter/filterSlice";
import { fetchHomePosts } from "./menuPickerSlice";
import { Link } from "react-router-dom";
import { fetchPopularPosts } from "./menuPickerPopularSlice";
import filterStyles from "../../filter/filterView.module.css";
import { fetchPosts } from "../../posts/postSlice";
import AskRedditImg from "../../../assets/AskReddit.png";
import funnyImg from "../../../assets/funny.png";
import WorldNewsImg from "../../../assets/worldnews.png";
import politicsImg from "../../../assets/politics.png";
import sportsImg from "../../../assets/sports.png";
import memesImg from "../../../assets/memes.png";

export default function MenuPickerView() {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.filter.postCategory);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIsActiveHomeClick = (e) => {
    dispatch(updateCategory(".json"));
    dispatch(fetchHomePosts());
    handleClose();
  };

  const handleIsActivePopularClick = (e) => {
    dispatch(updateCategory("r/popular.json"));
    dispatch(fetchPopularPosts());
    handleClose();
  };

  const handleIsActiveClick = (e) => {
    dispatch(updateCategory(e));
    dispatch(fetchPosts(e));
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.menuButton}
      >
        {(postCategory === ".json" || postCategory === "/.json") && (
          <>
            <HomeIcon sx={{ marginRight: 1, color: "#333333" }} />
            <div className={styles.activeMenuButtonTitle}>Home</div>
          </>
        )}
        {(postCategory === "/r/popular.json" ||
          postCategory === "r/popular.json" ||
          postCategory === "/r/popular/hot.json" ||
          postCategory === "r/popular/hot.json" ||
          postCategory === "/r/popular/new.json" ||
          postCategory === "r/popular/new.json" ||
          postCategory === "/r/popular/top.json" ||
          postCategory === "r/popular/top.json" ||
          postCategory === "/r/popular/rising.json" ||
          postCategory === "r/popular/rising.json") && (
          <>
            <AutoGraphIcon sx={{ marginRight: 1, color: "#333333" }} />
            <div className={styles.activeMenuButtonTitle}>Popular</div>
          </>
        )}
        {(postCategory === "r/AskReddit.json" ||
          postCategory === "/r/AskReddit.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={AskRedditImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>AskReddit</div>
          </>
        )}
        {(postCategory === "r/funny.json" ||
          postCategory === "/r/funny.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={funnyImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>Funny</div>
          </>
        )}
        {(postCategory === "r/worldnews.json" ||
          postCategory === "/r/worldnews.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={WorldNewsImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>WorldNews</div>
          </>
        )}
        {(postCategory === "r/politics.json" ||
          postCategory === "/r/politics.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={politicsImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>Politics</div>
          </>
        )}
        {(postCategory === "r/sports.json" ||
          postCategory === "/r/sports.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={sportsImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>Sports</div>
          </>
        )}
        {(postCategory === "r/memes.json" ||
          postCategory === "/r/memes.json") && (
          <>
            <img
              className={styles.subredditImage}
              src={memesImg}
              alt="subreddit"
            />
            <div className={styles.activeMenuButtonTitle}>Memes</div>
          </>
        )}
        <KeyboardArrowDownIcon sx={{ marginLeft: 1, color: "#333333" }} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: {
            width: 200,
          },
        }}
      >
        <div className={styles.feedsTitle}>Feeds</div>
        <Link
          to="/"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem onClick={() => handleIsActiveHomeClick()}>
            <HomeIcon sx={{ marginRight: 1 }} />
            Home
          </MenuItem>
        </Link>
        <Link
          to="r/popular"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem onClick={() => handleIsActivePopularClick()}>
            <AutoGraphIcon sx={{ marginRight: 1 }} />
            Popular
          </MenuItem>
        </Link>
        <div className={styles.feedsTitle}>Communities</div>
        <Link
          to="r/AskReddit"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
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
          </MenuItem>
        </Link>
        <Link
          to="r/funny"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
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
          </MenuItem>
        </Link>
        <Link
          to="r/funny"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
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
          </MenuItem>
        </Link>
        <Link
          to="r/politics"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
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
          </MenuItem>
        </Link>
        <Link
          to="r/sports"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
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
          </MenuItem>
        </Link>
        <Link
          to="r/memes"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem
            className={`${styles.feedItem} ${
              postCategory === "r/memes.json" ||
              postCategory === "/r/memes.json"
                ? styles.activeFeedItem
                : ""
            }`}
            style={{ marginTop: "10px" }}
            onClick={() => handleIsActiveClick("r/memes.json")}
          >
            <img
              className={styles.subredditImage}
              src={memesImg}
              alt="subreddit"
            />
            Memes
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
