import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";
import { notify, hide } from "../reducers/notificationReducer";

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

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAll(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.add(content);
    dispatch(create(newAnecdote));
    dispatch(notify("new anecdote"));
    setTimeout(() => dispatch(hide()), 5000);
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.vote(id);
    dispatch(vote(updatedAnecdote.id));
    dispatch(notify(`voted for anecdote ${updatedAnecdote.id}`));
    setTimeout(() => dispatch(hide()), 5000);
  };
};

export const { vote, create, setAll } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
