import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import styles from "./skeletonPostView.module.css";

export default function SkeletonLoadView() {
  return (
    <Box className={styles.skeletonContainer}>
      <div className={styles.skeletonVotesContainer}>
        <Skeleton
          width={40}
          sx={{ marginRight: 1 }}
          animation="wave"
          className={styles.skeletonUserVotes}
        />
      </div>
      <div className={styles.skeletonPostContainer}>
        <div className={styles.skeletonHeader}>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ marginBottom: 1 }}
            animation="wave"
          />
          <Skeleton
            height={30}
            width={200}
            sx={{ marginLeft: 1 }}
            animation="wave"
          />
        </div>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ marginBottom: 1, borderRadius: 1 }}
          height={15}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ marginBottom: 1, borderRadius: 1 }}
          height={15}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ marginBottom: 1, borderRadius: 1 }}
          height={15}
        />
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ borderRadius: 1 }}
          height={180}
        />
        <Skeleton
          animation="wave"
          className={styles.skeletonFooter}
          height={30}
          width={50}
        />
      </div>
    </Box>
  );
}
