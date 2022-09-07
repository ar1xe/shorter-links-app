// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const BASE_URL_API = "http://79.143.31.216/squeeze?link=";

let tokenUser = localStorage.getItem("token");

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    const response = await fetch(BASE_URL_API + url, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + tokenUser,
        "Content-Type": "application/json",
      }),
    });
    return await response.json();
  }
);

const initialState = {
  items: [],
  loading: "idle",
};
const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = "rejected";
    },
    [createShortLink.pending]: (state) => {
      state.loading = "loading";
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { id, short, target, counter } = action.payload;
      if (short) {
        state.items.push({ id, short, target, counter });
        state.loading = "idle";
      } else {
        state.loading = "error";
      }
    },
  },
});

export const selectLinks = (state) => state.links.items;
export default linkSlice.reducer;
