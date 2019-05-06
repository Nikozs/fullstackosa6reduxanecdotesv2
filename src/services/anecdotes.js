import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (teksti) => {
  const response = await axios.post(url, {content:teksti, votes: 0})
  return response.data
}

const updateVote = async (id,anecdote) => {
  const response = await axios.put(`${url}/${id}`, anecdote)
  return response.data
}

export default { 
  getAll, createNew, updateVote
 }