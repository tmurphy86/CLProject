import React from "react";
import "./Cards.css";
import {Row, Col} from "../Grid";
import {FavoritesAPI} from '../../API';
import Auth from '../../modules/Auth';


class PostCard extends React.Component {
  constructor(){
    super();

    this.state = {
      favorite: false
    }
  }

  componentWillMount(){
    this.checkIfFav();
  }

  checkIfFav = () => {

    if(Auth.isUserAuthenticated){

      const postId = this.props.id;
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

    const node = e.target;
    const favFeedback = document.querySelector(".fav-feedback-"+this.props.id)

    const postId = this.props.id;
    const userId = localStorage.id;

    FavoritesAPI.toggleFavorites(postId, userId)
    .then(res => {

      if (res.data.success){


              if(node.classList.contains("fa-heart-o")){

                node.classList.remove("fa-heart-o");
                node.classList.add("fa-heart")

                favFeedback.style.display = "block";
                favFeedback.innerHTML = "Added!";

                setInterval(() => {
                  favFeedback.style.display = "none";
                }, 2200)

              } else {

                node.classList.remove("fa-heart");
                node.classList.add("fa-heart-o")

                favFeedback.style.display = "block";
                favFeedback.innerHTML = "Removed!";

                setInterval(() => {
                  favFeedback.style.display = "none";
                }, 2200)

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

  render(){
    return (
      <Col size="md-6">
        <div className="PostCard">
          <Row>
            <Col size="md-10">
              <a href={this.props.url} className="bold-text">
                <h3>
                  {this.props.name}
                </h3>
              </a>
              <div className="PostCard-Meta">
                ${this.props.price} <span>- Created {this.props.date}</span>
              </div>
            </Col>
            <Col size="md-2">
              <div className="favorite-block">
                <a href="#/" onClick={this.handleFav}>
                <i className={this.state.favorite ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i>
              </a>
              <div className={"fav-feedback-" + this.props.id + " fav-feedback"}></div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
}

export default PostCard;
