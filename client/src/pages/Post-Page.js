import React from 'react';
import {Content} from "../components/Content";
import {Search} from "../components/Search";
import { Col, Row, Container } from "../components/Grid";
import {SidebarButton} from "../components/Buttons"
import {PostsAPI} from '../api';
import "./Post-Page.css"

class PostPage extends React.Component {
  constructor(){
    super();

    this.state = {
      postId:"",
      postTitle:"",
      postZip:"",
      postBody:"",
      postPrice:"",
      postAuthorId:"",
      postCreatedAt:"",
      postAddress:"",
      postLocation:"",
      postPhone:"",
      postObo:false
    }
  };

  componentWillMount(){

    const postId = this.props.match.params.postId;

    PostsAPI.grabPostData(postId)
    .then( res => {

      console.log(this.state.postId)

      this.setState({
        postId:res.data.id,
        postTitle:res.data.name,
        postZip:res.data.zip,
        postBody:res.data.postbody,
        postPrice:res.data.price,
        postAuthorId:res.data.userId,
        postCreatedAt:res.data.createdAt,
        postAddress:res.data.address,
        postLocation:res.data.location,
        postPhone:res.data.phone,
        postObo:false
      })

      console.log(this.state.postId)

    })
    .catch(err => console.log(err));

  }

  render() {
    return (
      <Content>
        <Container>
          <Row>
            <Col size="md-12">
              <Search />
            </Col>
            <Col size="md-12">
              <Row>
                <Col size="md-8">
                  <h1 className="post-title">{this.state.postTitle}</h1>
                </Col>
                <Col size="md-3">
                  <h1 className="post-price text-center">{this.state.postPrice}</h1>
                </Col>
              </Row>
            </Col>
            <Col size="md-8">
              <div>{this.state.postBody}</div>
            </Col>
            <Col size="md-3">
              <SidebarButton href="/#" postId={this.state.postId}><i className="fa fa-heart-o" aria-hidden="true"></i>Add to Favorites</SidebarButton>
              <div>{this.state.postZip}</div>
              <div>{this.state.postLocation}</div>
              <div>
                {(() => {
                  if(this.state.postAddress){
                    return this.state.postAddress
                  }
                })()}
              </div>
            </Col>
          </Row>
        </Container>
      </Content>
    )
  }
}


export default PostPage;
