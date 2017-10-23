import React from 'react';
import {PostsAPI, FavoritesAPI} from '../API';
import Auth from '../modules/Auth';
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
} from "../Components";


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
      postAddressString:"",
      authorInitial:"",
      authorColor:"",
      authorName:"",
      favorite: false
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
        postAddressString:res.data.addressString,
        authorInitial:res.data.authorInitial,
        authorColor:res.data.authorColor,
        authorName: res.data.authorName
      })

      console.log(this.state.postId)
      this.checkIfFav(this.state.postId);
    })
    .catch(err => console.log(err));

  }


  checkIfFav = (postId) => {

    if(Auth.isUserAuthenticated){

      const postId = this.state.postId;
      const userId = localStorage.id;

      FavoritesAPI.checkIfFavorite(postId, userId)
      .then(res =>{

        if(res.data){
          this.setState({
            favorite: true
          })

        }

      })
      .catch(err => console.log(err));

    }
  }



  handleFav = (e) => {

    const postId = this.state.postId;
    const userId = localStorage.id;

    const node = e.target;
    const heartIcon = node.childNodes[0];
    const innerText = node.childNodes[1];

    FavoritesAPI.toggleFavorites(postId, userId)
    .then(res => {

      if (res.data.success){

        if (heartIcon.classList.contains("fa-heart-o")){
          heartIcon.classList.remove("fa-heart-o");
          heartIcon.classList.add("fa-heart");
          innerText.textContent = "One of Your Favorites";
          node.style.background = "#ff377f";
        } else {
          heartIcon.classList.remove("fa-heart");
          heartIcon.classList.add("fa-heart-o");
          innerText.textContent = "Add to Favorites";
          node.style.background = "#33a6e2";
        }

      }

    })
    .catch(err => {
      if(err.response.status===401) {
        window.location= '/login'
      }
      console.log(err)
    });



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
                  <UserImage color={this.state.authorColor} initial={this.state.authorInitial} />
                  <span className="post-authors-name bold-text">{this.state.authorName}</span>
                  <span className="post-date">{this.state.postCreatedAt}</span>
                </ContentCardHeader>
                <ContentCardBody>
                  {this.state.postBody}
                </ContentCardBody>
              </ContentCard>
              {(() => {
                if(!Auth.isUserAuthenticated() || parseInt(this.state.postAuthorId) === parseInt(localStorage.id)){
                  return (<div></div>)
                } else {
                  return (
                    <ContentCard>
                      <ContentCardBody>
                        <Row>
                          <Col size="md-2">
                            <UserImage color={localStorage.color} initial={localStorage.name.charAt(0)}/>
                          </Col>
                          <Col size="md-10">
                            <PostMessageForm
                              senderName={localStorage.name}
                              senderId={localStorage.id}
                              receiverName={this.state.authorName}
                              receiverId={this.state.postAuthorId}
                              postId={this.state.postId}
                              postTitle={this.state.postTitle}/>
                            </Col>
                          </Row>

                        </ContentCardBody>
                      </ContentCard>
                    )
                  }
                })()}
              </Col>
              <Col size="md-4" offset="ml-auto">
                <div  onClick={this.handleFav} >
                  {this.state.favorite ?
                    <SidebarButton href="#/" postId={this.state.postId} background="#ff377f"><i className="fa fa-heart" aria-hidden="true"></i>One of Your Favorites</SidebarButton>
                    :
                    <SidebarButton href="#/" postId={this.state.postId}><i className="fa fa-heart-o" aria-hidden="true"></i>Add to Favorites</SidebarButton>
                  }
                </div>
                <ContentCard>
                  {/* Google Map */}
                  <PostMap lat={this.state.postLat} lng={this.state.postLng} />
                </ContentCard>
                <div style={{position:'relative', float:'left', width:'100%'}}>
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
