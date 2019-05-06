import React from 'react'
import { thunkupdateVotes } from './../reducers/anecdoteReducer'
import { thunkNotify, clearNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import Filter from './../components/Filter'


class AnecdoteList extends React.Component {

  newVote = (anecdote) => async (event) => {
    event.preventDefault()

    console.log(anecdote.id)

    console.log(anecdote.votes)
    this.props.thunkNotify(`you voted '${anecdote.content}'`, 10000)
    this.props.thunkupdateVotes(anecdote)
  }



  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.visibleAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.newVote(anecdote)}{...console.log(anecdote.votes)}>
                Vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  if (filter === '')
    return anecdotes.sort((a, b) => b.votes - a.votes)
  else
    return anecdotes.filter(function (anecdote) { return anecdote.content.includes(filter) })
      .sort((a, b) => b.votes - a.votes)

}


const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

export default connect(
  mapStateToProps,
  { thunkupdateVotes, thunkNotify, clearNotification }
)(AnecdoteList)