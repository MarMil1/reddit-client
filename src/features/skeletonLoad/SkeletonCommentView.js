import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import styles from "./skeletonCommentView.module.css";

export const SkeletonCommentView = () => {
  return (
    <Box className={styles.skeletonCommentContainer}>
      <div>
        <div className={styles.skeletonUserInfo}>
          <Skeleton
            variant="circular"
            width={25}
            height={25}
            sx={{ marginBottom: 1, marginRight: 1 }}
            animation="wave"
          />
          <Skeleton
            width={100}
            height={20}
            sx={{ marginBottom: 1, marginRight: 1 }}
            animation="wave"
          />
          <Skeleton
            width={200}
            height={20}
            sx={{ marginBottom: 1, marginRight: 1 }}
            animation="wave"
          />
          <Skeleton
            width={200}
            height={20}
            sx={{ marginBottom: 1 }}
            animation="wave"
          />
        </div>
        <div>
          <Skeleton
            height={20}
            animation="wave"
            className={styles.skeletonCommentBody}
          />
          <Skeleton
            height={20}
            animation="wave"
            className={styles.skeletonCommentBody}
          />
          <Skeleton
            height={20}
            animation="wave"
            className={styles.skeletonCommentBody}
          />
        </div>
      </div>
      <div>
        <Skeleton
          height={20}
          width={50}
          animation="wave"
          className={styles.skeletonCommentBody}
        />
      </div>
    </Box>
  );
};
