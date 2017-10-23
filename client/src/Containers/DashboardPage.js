import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../Components/Login/Dashboard';
import { Content, Container, Col, Row, ContentCard, ContentCardHeader, ContentCardBody} from "../Components";
import "./Dashboard.css"
import {FavoritesAPI} from '../API';


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      favorites:[]
    };
  }

  componentWillMount(){
    this.getUsersFavorites()
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


  getUsersFavorites = () => {

    const userId = localStorage.id;
    console.log(userId)
    if (userId){
      FavoritesAPI.getUsersFavorites(userId)
      .then(res => {
        this.setState({
          favorites: res.data
        })
      })
      .catch(err => console.log(err))

    }

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

  render() {
    return (
      <Content>
        <Dashboard secretData={this.state.secretData} />
        <Container>
          <Row>
            <Col size="md-12">
              <h2>Dashboard</h2>
            </Col>
            <Col size="md-7">
              <h2>Dashboard</h2>
            </Col>
            <Col size="md-4" offset="ml-auto">
              <ContentCard>
                <ContentCardHeader>
                  <i className="fa fa-heart pull-left" aria-hidden="true"></i>
                  <div className="bold-text pull-left dashboard-heading">Favorites</div>
              </ContentCardHeader>
              <ContentCardBody>
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
