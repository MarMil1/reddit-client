import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import { SinglePost } from "./SinglePost";
import { updateCategory } from "../filter/filterSlice";

export const PostsView = () => {
  const post = useSelector((state) => state.post);
  const postCategory = useSelector((state) => state.filter.postCategory);
  console.log(postCategory, "This is postCategory");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!postCategory) {
      dispatch(updateCategory("hot"));
      dispatch(fetchPosts("hot"));
    } else {
      dispatch(updateCategory(postCategory));
      dispatch(fetchPosts(postCategory));
    }
  }, [dispatch, postCategory]);

  return (
    <div>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <div>
          {post.posts.map((post) => (
            <SinglePost
              key={post.id}
              title={post.title}
              image={post.url}
              author={post.author}
              subreddit={post.permalink.split("/").slice(0, 3).join("/")}
              ups={post.ups}
              ratio={post.upvote_ratio}
              postHint={post.post_hint}
              created={post.created}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
