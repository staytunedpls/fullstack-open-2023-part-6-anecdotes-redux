import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const add = async (content) => {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
};

const vote = async (id) => {
  const anecdotes = await getAll();
  const current = anecdotes.find((anecdote) => anecdote.id === id);
  const response = await axios.put(`${baseUrl}/${id}`, {
    ...current,
    votes: current.votes + 1,
  });
  return response.data;
};

const anecdoteService = { getAll, add, vote };
export default anecdoteService;
