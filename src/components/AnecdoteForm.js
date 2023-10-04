import { createAnecdoteAction } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    if (content.length > 0) {
      return dispatch(createAnecdoteAction(content));
    }
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
