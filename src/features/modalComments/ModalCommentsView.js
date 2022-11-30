import React, { useEffect } from "react";
import styles from "./modalComments.module.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./modalCommentsSlice";
import { SingleComment } from "./SingleComment";
import { SkeletonCommentView } from "../skeletonLoad/SkeletonCommentView";

export const ModalCommentsView = React.forwardRef((props, ref) => {
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(props.permalink));
  }, [dispatch, props.permalink]);

  const style = {
    color: "#d8dadc",
    alignSelf: "center",
    marginRight: "10px",
    fontSize: "1rem",
    fontWeight: "400",
  };

  return (
    <div>
      <Box className={styles.boxContainer}>
        <div className={styles.postHeader}>
          <div className={styles.votesHeader}>
            <div className={styles.upsVotesArrowHeader}>&#10140;</div>
            <div className={styles.upsVotesHeader}>{props.ups}</div>
            <div style={style}>|</div>
            <div className={styles.titleHeader}>{props.title}</div>
          </div>

          <div onClick={props.handleClose} className={styles.closeModalButton}>
            <div style={style}>|</div>
            &#10005;
            <span className={styles.closeModalButtonText}>Close</span>
          </div>
        </div>
        <div className={styles.mainContentVotesContainer}>
          <div className={styles.votes}>
            <div className={styles.upsVotesArrow}>&#10140;</div>
            <div className={styles.upsVotes}>{props.ups}</div>
          </div>
          <Box className={styles.mainRedditPostContainer}>
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
                Created {props.created} ago
              </span>
            </div>
            <div id="modal-modal-title" className={styles.title}>
              {props.title}
            </div>
            <Box id="modal-modal-description">
              {props.postHint === "link" && (
                <div className={styles.linkContent}>
                  <a href={props.image}>{props.image}</a>
                </div>
              )}
              {props.postHint === "image" && (
                <img className={styles.image} src={props.image} alt="post" />
              )}
              {props.postHint === "hosted:video" && (
                <video
                  className={styles.image}
                  preload="auto"
                  controls
                  width="100%"
                  height="auto"
                >
                  <source src={props.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className={styles.postFooter}>
                <div className={styles.commentSection}>
                  <i className="fa-regular fa-message"></i>
                  <div className={styles.commentNumber}>
                    {props.numComments} Comments
                  </div>
                </div>
                <div className={styles.ratioVotes}>
                  {props.ratio * 100}% Upvoted
                </div>
              </div>
            </Box>
          </Box>
        </div>
        <div className={styles.commentsContainer}>
          {comment.loading && (
            <div>
              <SkeletonCommentView />
              <SkeletonCommentView />
              <SkeletonCommentView />
              <SkeletonCommentView />
              <SkeletonCommentView />
            </div>
          )}
          {!comment.loading && comment.error ? (
            <div>Error: {comment.error}</div>
          ) : null}
          {!comment.loading && comment.comments.length ? (
            <div>
              {comment.comments.map((comment) => (
                <SingleComment
                  key={comment.id}
                  author={comment.author}
                  created={comment.created}
                  edited={comment.edited}
                  body={comment.body}
                  ups={comment.ups}
                />
              ))}
            </div>
          ) : null}
        </div>
      </Box>
    </div>
  );
});
