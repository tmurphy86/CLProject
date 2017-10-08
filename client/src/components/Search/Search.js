import React from 'react';
import NewLocation from './NewLocation.js'
import "./Search.css";

class Search extends React.Component {
  render(){
    return (
      <form className="Search-form">
        <input type="text" for="search" placeholder="Search"/>
        <i class="fa fa-search searchIcon" aria-hidden="true"></i>
        <span>in</span>
        <NewLocation location='Arlington, Virginia'/>
      </form>
    )
  }
}

export default Search;
