import React from "react";
import styles from "./singlePost.module.css";

export const SinglePost = (props) => {
  const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  const abbreviateNumber = (number) => {
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0) return number;
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
  };

  const timeSince = (date) => {
    const seconds = Math.floor(new Date().getTime() / 1000 - date);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.votes}>
        <div className={styles.upsVotesArrow}>&#10140;</div>
        <div className={styles.upsVotes}>{abbreviateNumber(props.ups)}</div>
        <div className={styles.ratioVotes}>{props.ratio * 100}%</div>
      </div>
      <div className={styles.mainPostContent}>
        <div className={styles.authorSubredditContainer}>
          <a href={`https://www.reddit.com${props.subreddit}`}>
            <div className={styles.subreddit}>{props.subreddit}</div>
          </a>
          •
          <div className={styles.author}>
            Posted by
            <a href={`https://www.reddit.com/user/${props.author}`}>
              <span> {props.author}</span>
            </a>
          </div>
          •
          <span className={styles.created}>
            Created {timeSince(props.created)} ago
          </span>
        </div>
        <div className={styles.title}>{props.title}</div>
        {props.postHint === "link" && <a href={props.image}>{props.image}</a>}
        {props.postHint === "image" && (
          <img className={styles.image} src={props.image} alt="post" />
        )}
        {props.postHint === "hosted:video" && (
          <video preload="auto" width="320" height="240" controls>
            <source src={props.image} type="application/vnd.apple.mpegURL" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};
