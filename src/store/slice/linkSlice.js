import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpService } from "services/signUpService";
// import { BASE_URL_API } from "../../constants";
export const BASE_URL_API = "http://79.143.31.216/squeeze?link=";

const token =
  "CmUo8BvRVpwU0x5j2xjjpwIrRdw7cGlMACjLnYaU9I-gs99z83c60LioJ9-7VVoFT10";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    const response = await fetch(BASE_URL_API + url, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + token,
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
