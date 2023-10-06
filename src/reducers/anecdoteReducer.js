import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

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
      return state.concat(asObject(action.payload));
    },
    setAll(state, action) {
      return action.payload
    }
  },
});

export const { vote, create, setAll } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
