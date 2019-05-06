import React from 'react'
import { filterText } from './../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
    handleChange = (event) => {
    
    let inputValue = event.target.value
    this.props.filterText(inputValue)

console.log(inputValue)


    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          Filter: <input onChange={this.handleChange}/>
        </div>
      )
    }
  }

  
  const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  }
  

  export default connect(
    mapStateToProps,
    {filterText}
  )(Filter)
