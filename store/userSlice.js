/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, token, id } = action.payload;
      state.email = email;
      state.token = token;
      state.id = id;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("email");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
