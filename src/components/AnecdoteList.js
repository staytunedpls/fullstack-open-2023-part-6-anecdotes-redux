import { voteAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch, useSelector } from "react-redux";

const anecdotesToDisplay = (state) => {
  return [...state.anecdotes]
    .sort((a, b) => -a.votes + b.votes)
    .filter((anecdote) => anecdote.content.includes(state.filter));
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => anecdotesToDisplay(state));
  const dispatch = useDispatch();

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={function () {
                dispatch(voteAnecdote(anecdote.id));
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
