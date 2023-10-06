import { create } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { notify, hide } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    if (content.length > 0) {
      dispatch(create(content));
      dispatch(notify("new anecdote"));
      setTimeout(() => dispatch(hide()), 5000);
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
