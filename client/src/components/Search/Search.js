import React from 'react';
import { Col, Row } from "../Grid";
import NewLocation from './NewLocation.js'
import "./Search.css";

class Search extends React.Component {
  render(){
    return (
      <Row>
        <form className="Search-form">
            <Col size="md-7">
              <input type="text" htmlFor="search" placeholder="Search"/>
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
