import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postSlice";

import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  React.useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
      console.log("here", posts);
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus == "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b?.date?.localeCompare(a?.date));
    content = orderedPosts?.map((post) => (
      <PostExcerpt key={post?.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  // const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  // const renderedPosts = orderPosts.map((post) => (
  //   <PostExcerpt key={post.id} post={post} />
  // ));

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
