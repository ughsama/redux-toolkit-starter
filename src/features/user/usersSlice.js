import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "hey",
  },
  {
    id: 1,
    name: "hey 1",
  },
  {
    id: 2,
    name: "hey 2",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
