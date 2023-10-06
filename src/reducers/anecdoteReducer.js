import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      return state.map((anecdote) =>
        anecdote.id !== action.payload
          ? anecdote
          : { ...anecdote, votes: anecdote.votes + 1 }
      );
    },
    create(state, action) {
      return state.concat(action.payload);
    },
    setAll(state, action) {
      return action.payload;
    },
  },
});

export const { vote, create, setAll } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
