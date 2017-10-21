import React from 'react'
import { Col, Row } from "../Grid";
import {PostCard} from "../../Components";
import {SearchAPI} from '../../API';

class SearchResults extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: this.props.searchTerm,
      searchResults: []
    }
  }

  componentWillMount(){
    this.grabSearchResults()
  }

  grabSearchResults = () =>{

    SearchAPI.grabSearchResults(this.state.searchTerm)
    .then(res =>{
      this.setState({
        searchResults: res.data
      })
    })
    .catch(err => {console.log(err)})
  }


  render(){
    return (
      <Col size="md-12">
        <Row>
          <Col size="md-12">
            <h3>Search Results for {this.state.searchTerm}</h3>
          </Col>
          <Col size="md-12">
            <Row>


                {(() => {
                  if(this.state.searchTerm && this.state.searchResults.length > 0){
                    return (
                      this.state.searchResults.map(post =>{
                        return (
                          <PostCard key={post.id} id={post.id} name={post.name} date={post.date} price={post.price} url={`/c/${this.state.categoryId}/post/${post.id}`} />
                        )
                      }
                    )
                  )
                } else {
                  return (
                    <Col size="md-12">
                      <br/>
                      <br/>
                      <h4>No results</h4>
                    </Col>
                  )
                }
              })()}


          </Row>
        </Col>
        </Row>
    </Col>
  )
}

}

export default SearchResults;
