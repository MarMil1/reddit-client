import React, { useEffect, useState } from "react";
import styles from "./singlePost.module.css";
import Modal from "@mui/material/Modal";
import { ModalCommentsView } from "../modalComments/ModalCommentsView";
import { abbreviateNumber } from "../../helperFunctions/abbreviateNumber";
import { timeSince } from "../../helperFunctions/timeSince";
import axios from "axios";

export const SinglePost = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [subredditImageLink, setSubredditImageLink] = useState();

  useEffect(() => {
    const getCommentAuthorData = async () => {
      try {
        const response = await axios.get(
          `https://www.reddit.com/r/${props.subreddit}/about.json`
        );
        setSubredditImageLink(response.data.data.icon_img);
      } catch (error) {
        console.log(error);
      }
    };
    getCommentAuthorData();
  }, [props.subreddit]);

  return (
    <div id={props.id} className={styles.singlePostContainer}>
      <div className={styles.votes}>
        <div className={styles.upsVotesArrow}>&#10140;</div>
        <div className={styles.upsVotes}>{abbreviateNumber(props.ups)}</div>
      </div>
      <div className={styles.mainPostContent}>
        <div className={styles.authorSubredditContainer}>
          {subredditImageLink ? (
            <img
              className={styles.authorSubredditImage}
              src={subredditImageLink}
              alt="subreddit"
            />
          ) : (
            <img
              className={styles.authorSubredditImage}
              src="https://www.redditstatic.com/avatars/avatar_default_02_46D160.png"
              alt="subreddit"
            />
          )}
          <a href={`https://www.reddit.com/r/${props.subreddit}`}>
            <div className={styles.subreddit}>{`/r/${props.subreddit}`}</div>
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
        <div id={`post-title-${props.id}`} className={styles.title}>
          {props.title}
        </div>
        {props.postHint === "link" && (
          <div className={styles.linkContent}>
            <a href={props.image}>{props.image}</a>
          </div>
        )}
        {props.postHint === "image" && (
          <img className={styles.image} src={props.image} alt="post" />
        )}
        {props.postHint === "hosted:video" && (
          <video className={styles.video} preload="auto" controls>
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className={styles.commentSection} onClick={handleOpen}>
          <i className="fa-regular fa-message"></i>
          <div className={styles.commentNumber}>
            {abbreviateNumber(props.numComments)} Comments
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflowY: "scroll" }}
        >
          <ModalCommentsView
            title={props.title}
            handleClose={() => handleClose()}
            postHint={props.postHint}
            image={props.image}
            video={props.video}
            subreddit={props.subreddit}
            author={props.author}
            created={timeSince(props.created)}
            ups={abbreviateNumber(props.ups)}
            ratio={props.ratio}
            numComments={abbreviateNumber(props.numComments)}
            permalink={props.permalink}
            subredditImageLink={subredditImageLink}
          />
        </Modal>
      </div>
    </div>
  );
};
