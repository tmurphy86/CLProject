import React from 'react';
import {PostsAPI} from '../api';
import "./Post-Page.css";
import {
  ContentCard,
  ContentCardBody,
  ContentCardHeader,
  Col,
  Row,
  Container,
  SidebarButton,
  Search,
  Content,
  UserImage,
  PostMessageForm,
  PostMap
} from "../components";


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
      postObo:false,
      postLat:"",
      postLng:"",
      postAddressString:""
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
        postObo:false,
        postLat:res.data.lat,
        postLng:res.data.lng,
        postAddressString:res.data.addressString
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
                <Col size="md-7">
                  <h1 className="post-title light-text">{this.state.postTitle}</h1>
                </Col>
                <Col size="md-4" offset="ml-auto">
                  <h1 className="post-price text-center light-text">{this.state.postPrice}</h1>
                </Col>
              </Row>
            </Col>
            <Col size="md-7">
              <ContentCard>
                <ContentCardHeader>
                  <UserImage src="https://avatars1.githubusercontent.com/u/8130090" alt="users image" />
                  <span className="post-authors-name bold-text">Posters Name</span>
                  <span className="post-date">2 days ago</span>
                </ContentCardHeader>
                <ContentCardBody>
                  {this.state.postBody}
                </ContentCardBody>
              </ContentCard>
              <ContentCard>
                <ContentCardBody>
                  <Row>
                    <Col size="md-2">
                      <UserImage src="https://avatars1.githubusercontent.com/u/8130090" alt="users image" />
                    </Col>
                    <Col size="md-10" >
                      <PostMessageForm />
                    </Col>
                  </Row>

                </ContentCardBody>
              </ContentCard>
            </Col>
            <Col size="md-4" offset="ml-auto">
              <SidebarButton href="/#" postId={this.state.postId}><i className="fa fa-heart-o" aria-hidden="true"></i>Add to Favorites</SidebarButton>
              <ContentCard>
                {/* Google Map */}
                <PostMap lat={this.state.postLat} lng={this.state.postLng} />
              </ContentCard>
              <div style={{position:'relative', float:'left'}}>
                <Row>
                  <Col size="md-3"><strong>Location:</strong></Col>
                  <Col size="md-8" offset="ml-auto">{this.state.postAddressString}</Col>
                </Row>
              <br/>
                {(() => {
                  if(this.state.postPhone){
                    return (
                      <Row>
                        <Col size="md-3"><strong>Phone:</strong></Col>
                        <Col size="md-8" offset="ml-auto">{this.state.postPhone}</Col>
                      </Row>

                    )
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
