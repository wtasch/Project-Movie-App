import React, { Component } from 'react';
import {Route, Link, Redirect } from 'react-router-dom';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title:'',
      valid: false
    }
  }

  searchConfirm = (e) => {
    e.preventDefault()
    this.setState({
      valid: true
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }


  render() {
    const title = this.state.title;
    return (
      <div className="movieSearch">
        <form onSubmit={this.searchConfirm}>
          <input
            type="text"
            name="title"
            placeholder="search"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="submit"
          />
        </form>
          { this.state.valid ? <Redirect 
            to={{
              pathname:"./SearchResults",
              state: { title: this.state.title },
            }} 
            />
            : <h3>data not loaded</h3>
          }
      </div>
    )
  }
}

export default Search;