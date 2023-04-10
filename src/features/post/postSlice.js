import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const REACTIONS_OBJECT = {
  thumbsUp: 0,
  wow: 0,
  heart: 0,
  rocket: 0,
  coffee: 0,
};

const initialState = [
  {
    id: 1,
    title: "learning",
    content: "just stuff",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: REACTIONS_OBJECT,
  },
  {
    id: 2,
    title: "we're normal men",
    content: "just innocent men",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: REACTIONS_OBJECT,
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: REACTIONS_OBJECT,
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
