import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) =>
    state.toSorted((a, b) => (a.votes >= b.votes ? a : b))
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch({ type: "VOTE", payload: { id } });
  };

  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    if (content.length > 0) {
      dispatch({ type: "NEW", payload: { content } });
    }
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
