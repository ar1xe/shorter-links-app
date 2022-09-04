import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../constants";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    const response = await fetch(BASE_URL_API + url, { method: "POST" });
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
      const { short } = action.payload;
      if (short) {
        state.items.push(short);
        state.loading = "idle";
      } else {
        state.loading = "error";
      }
    },
  },
});

export default linkSlice.reducer;
