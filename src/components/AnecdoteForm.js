import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { thunkNotify, clearNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes' 

class AnecdoteForm extends React.Component {
  
  
  addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
   event.target.anecdote.value = ''
   const newanecdote= await anecdoteService.createNew(content)  
   this.props.anecdoteCreation(newanecdote)

   this.props.thunkNotify(`Added anecdote '${newanecdote.content}'`, 10000)
  }
  

   render() {
     return (
       <div>
      <h2>Create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name='anecdote'/></div>
          <button>Create</button> 
        </form>
      </div>
     )
   }
}

export default connect(
  null,
  {anecdoteCreation,thunkNotify,clearNotification}
)(AnecdoteForm)
