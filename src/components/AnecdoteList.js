import { voteAction } from "../reducers/anecdoteReducer";
import { useDispatch, useSelector } from "react-redux";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.toSorted((a, b) => (a.votes >= b.votes ? a : b))
  );
  const dispatch = useDispatch();

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteAction(anecdote.id))}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
