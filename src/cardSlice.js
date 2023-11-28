import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cards: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchcards = createAsyncThunk("user/fetchcards", () => {
  return axios
    .get(
      "https://api.hearthstonejson.com/v1/189017/enUS/cards.collectible.json"
    )
    .then((response) => response.data);
});

const cardSlice = createSlice({
  name: "card",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchcards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchcards.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
      state.error = "";
    });
    builder.addCase(fetchcards.rejected, (state, action) => {
      state.loading = false;
      state.cards = [];
      state.error = action.error.message;
    });
  },
});

export default cardSlice.reducer;
