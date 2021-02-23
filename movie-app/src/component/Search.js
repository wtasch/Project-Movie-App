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
    this.setState(prevState=>({
      valid:!prevState.valid
    }));
  }

  handleChange = (evt) => {
    console.log(this.props)
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }



  render() {
    console.log(this.state.valid)
    return (
      <div className="movieSearch">
        <form onSubmit={this.searchConfirm}>
          <div id="searchBar">
            <input id="searchField"
              type="text"
              name="title"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <input id="searchButton"
              type="submit"
              value=""
            />
          </div>          
        </form>
          { this.state.valid ? <Redirect 
            to={{
              pathname:"./SearchResults",
              state: { title: this.state.title },
            }} 
                        />
            : console.log("waiting for input")
          }
      </div>
    )
  }
}

export default Search;