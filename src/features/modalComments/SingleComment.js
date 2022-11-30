import React, { useEffect, useState } from "react";
import styles from "./singleComment.module.css";
import { timeSince } from "../../helperFunctions/timeSince";
import { abbreviateNumber } from "../../helperFunctions/abbreviateNumber";
import axios from "axios";

export const SingleComment = (props) => {
  const [commenterImageLink, setCommenterImageLink] = useState();

  useEffect(() => {
    const getCommentAuthorData = async () => {
      try {
        const response = await axios.get(
          `https://www.reddit.com/user/${props.author}/about.json`
        );
        setCommenterImageLink(response.data.data.snoovatar_img);
      } catch (error) {
        console.log(error);
      }
    };
    getCommentAuthorData();
  }, [props.author]);

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        {commenterImageLink ? (
          <div className={styles.userAvatar}>
            <img src={commenterImageLink} alt="user avatar" />
          </div>
        ) : (
          <div className={styles.userAvatar}>
            <img
              src="https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png"
              alt="user avatar"
            />
          </div>
        )}
        <a
          className={styles.author}
          href={`https://www.reddit.com/user/${props.author}`}
        >
          <div>{props.author}</div>
        </a>
        •<div className={styles.created}>{timeSince(props.created)} ago</div>
        {props.edited !== false ? (
          <div className={styles.editedContainer}>
            •
            <div className={styles.edited}>
              Edited {timeSince(props.edited)} ago
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.body}>{props.body}</div>
      <div className={styles.commentFooter}>
        <div className={styles.upsVotesArrow}>&#10140;</div>
        <div className={styles.upsVotesNumber}>
          {abbreviateNumber(props.ups)}
        </div>
      </div>
    </div>
  );
};
