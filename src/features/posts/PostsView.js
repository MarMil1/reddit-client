import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import { SinglePost } from "./SinglePost";
import { updateCategory } from "../filter/filterSlice";
import SkeletonPostView from "../skeletonLoad/SkeletonPostView";

export const PostsView = () => {
  const post = useSelector((state) => state.post);
  const postCategory = useSelector((state) => state.filter.postCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postCategory) {
      dispatch(updateCategory(".json"));
      dispatch(fetchPosts(".json"));
    } else {
      dispatch(updateCategory(postCategory));
      dispatch(fetchPosts(postCategory));
    }
  }, [dispatch, postCategory]);

  return (
    <div
      style={{
        marginTop:
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
            ? "20px"
            : "70px",
      }}
    >
      {post.loading && (
        <div>
          <SkeletonPostView />
          <SkeletonPostView />
          <SkeletonPostView />
          <SkeletonPostView />
        </div>
      )}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <div
          id="all-posts"
          style={{
            marginTop:
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
                ? "20px"
                : "70px",
          }}
        >
          {post.posts.map((post, i) => (
            <SinglePost
              key={post.id}
              id={i}
              title={post.title}
              image={post.url}
              author={post.author}
              subreddit={post.subreddit}
              ups={post.ups}
              ratio={post.upvote_ratio}
              postHint={post.post_hint}
              created={post.created}
              video={
                post.secure_media !== null &&
                post.secure_media.reddit_video &&
                post.secure_media.reddit_video.fallback_url
              }
              numComments={post.num_comments}
              permalink={post.permalink}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
