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
    console.log("did a search")
    console.log(this.state.title)
    this.setState({
      valid: true
    })

    console.log("true")
    console.log(this.valid);
  }

  handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value);
    console.log("check")
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }


  render() {
    const title = this.state.title;
    console.log(this.state.valid)
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
      <h3> 
        { this.state.valid ? <Redirect 
        to={{
          pathname:"./SearchResults",
          state: { title: this.state.title },
        }} 
        />
        : console.log(this.state.valid) }</h3>
      </div>
    )
  }
}

export default Search;