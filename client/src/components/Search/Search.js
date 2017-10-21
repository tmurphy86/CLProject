import React from 'react';
import { Col, Row } from "../Grid";
import NewLocation from './NewLocation.js'
import "./Search.css";


class Search extends React.Component {
  constructor(){
    super()

    this.state = {
      searchInput:"",
    }

  }

  handleSearchInput = (e) => {

    this.setState({
      searchInput: e.target.value
    })

  }


  render(){
    return (
      <Row>
        <form className="Search-form" action={"/search/"+this.state.searchInput}>
          <Col size="md-7">
            <input type="text" id="searchInput" htmlFor="search" placeholder="Search" onChange={this.handleSearchInput} value={this.state.searchInput}/>
            <i className="fa fa-search searchIcon" aria-hidden="true"></i>
          </Col>
          <Col size="md-5" offset="ml-auto">
            <Row>
              <Col size="md-1"><div className="SearchLabel">in</div></Col>
              <Col size="md-10" offset="ml-auto"><NewLocation location='Arlington, Virginia'/></Col>
            </Row>
          </Col>
        </form>

      </Row>
    )
  }
}
export default Search;
