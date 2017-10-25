import React from 'react';
import Auth from '../modules/Auth';
// import Dashboard from '../Components/Login/Dashboard';
import { Content, Container, Col, Row, ContentCard, ContentCardHeader, ContentCardBody, UserImage} from "../Components";
import "./Dashboard.css"
import {FavoritesAPI, MessageAPI, PostsAPI} from '../API';


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      favorites:[],
      messages:[],
      posts:[]
    };
  }

  componentWillMount(){

    const userId = localStorage.id;

    if(userId){
      this.getUsersFavorites(userId);
      this.getUsersMessages(userId);
      this.getUsersPosts(userId);
    }

  }


  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();

  }


  getUsersFavorites = (userId) => {


    FavoritesAPI.getUsersFavorites(userId)
    .then(res => {

      this.setState({
        favorites: res.data
      })
    })
    .catch(err => console.log(err))

  }

  getUsersMessages = (userId) => {

    MessageAPI.getUsersMessages(userId)
    .then(res => {

      this.setState({
        messages: res.data
      })
    })
    .catch(err => console.log(err));

  }


  handleFavoriteDelete = (e) => {
    e.preventDefault();

    const post = e.target.parentNode.parentNode;
    const userId = localStorage.id;
    const postId = e.target.dataset.id;

    if (userId){

      FavoritesAPI.toggleFavorites(postId, userId)
      .then(res => {

        if(res.data.success){
          post.remove();
        }

      })
      .catch(err => {
        if(err.response.status===401) {
          window.location= '/login'
        }
        console.log(err)
      });

    }

  }

  getUsersPosts = (userId) => {

    PostsAPI.getUsersPosts(userId)
    .then(res => {

      this.setState({
        posts: res.data
      })
    })
    .catch(err => {
      if(err.response.status===401) {
        window.location= '/login'
      }
      console.log(err)
    });

  }


  handlePostDelete = (e) => {
    e.preventDefault();

    const post = e.target.parentNode.parentNode;
    const userId = localStorage.id;
    const postId = e.target.dataset.id;

    if (userId){

      PostsAPI.deletePost(postId, userId)
      .then(res => {

        if(res.data.success){
          post.remove();
        }

      })
      .catch(err => {
        if(err.response.status===401) {
          window.location= '/login'
        }
        console.log(err)
      });

    }

  }

  render() {
    return (
      <Content>
        <Container>
          <Row>
            <Col size="md-12">
              <h2>Dashboard</h2>
              <br/>
              <br/>
            </Col>
            <Col size="md-7">
              <ContentCard>
                <ContentCardHeader>
                  <i className="fa fa-commenting pull-left" aria-hidden="true"></i>
                  <div className="bold-text pull-left dashboard-heading">Messages</div>
                </ContentCardHeader>
                <ContentCardBody>
                  <div id="accordion" role="tablist">

                    {this.state.messages.length === 0 ? <p className="text-center">No Messages</p> : ""}

                    { this.state.messages.map((message) => {
                      return (
                        <div key={message.id}>
                          <a data-toggle="collapse" href={"#message-"+message.id} aria-expanded="false" className="message-toggle bold-text">
                            <li className="message-list list-unstyled" key={message.id} role="tab">
                              <span className="user-image-span"><UserImage color={localStorage.color} initial={message.senderName.charAt(0)} /></span>
                              <span className="">{message.senderName}</span>
                              <span className="msg-date pull-right">{message.updatedAt}</span>
                            </li>
                          </a>
                          <div id={"message-"+message.id} className="collapse" role="tabpanel" data-parent="#accordion">
                            <div className="card-body card-body-messages">
                              <div className="bold-text">{message.postTitle} </div>
                              <br/>
                              {message.messageVal}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ContentCardBody>
              </ContentCard>
              <ContentCard>
                <ContentCardHeader>
                  <i className="fa fa-thumb-tack pull-left" aria-hidden="true"></i>
                  <div className="bold-text pull-left dashboard-heading">Your Posts</div>
                </ContentCardHeader>
                <ContentCardBody>

                  {this.state.posts.length === 0 ? <p className="text-center">You haven't made any posts yet! <a href="/newpost" className="bold-text">Make one now.</a></p> : ""}

                  {this.state.posts.map((post) => {
                    return (
                      <li className="post-list list-unstyled" key={post.id}>
                        <a href={`/c/${post.categoryId}/post/${post.id}`} className="bold-text">{post.title}</a>
                        <a href="#/" onClick={this.handlePostDelete}><i className="fa fa-times pull-right" aria-hidden="true" data-id={post.id}></i></a>
                        <a href={`/post/edit/${post.id}`}><i className="fa fa-pencil pull-right" style={{marginRight:15 + "px"}} aria-hidden="true"></i></a>
                      </li>
                    )
                  })}
                </ContentCardBody>
              </ContentCard>
            </Col>
            <Col size="md-4" offset="ml-auto">
              <ContentCard>
                <ContentCardHeader>
                  <i className="fa fa-heart pull-left" aria-hidden="true"></i>
                  <div className="bold-text pull-left dashboard-heading">Favorites</div>
                </ContentCardHeader>
                <ContentCardBody>

                  {this.state.favorites.length === 0 ? <p className="text-center">No Favorites</p> : ""}
                  {this.state.favorites.map((favorite) => {
                    return (
                      <li className="favorite-list list-unstyled" key={favorite.id}>
                        <a href={`/c/${favorite.category}/post/${favorite.id}`} className="bold-text">{favorite.name}</a>
                        <a href="#/" onClick={this.handleFavoriteDelete}><i className="fa fa-times pull-right" aria-hidden="true" data-id={favorite.id}></i></a>
                      </li>
                    )
                  })}
                </ContentCardBody>
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </Content>
    );
  }

}

export default DashboardPage;
