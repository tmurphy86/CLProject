import React from "react";
import "./Cards.css";
import {Row, Col} from "../Grid";
import {FavoritesAPI} from '../../api';

const PostCard = (props) => {

  const handleFav = (e) => {

    const node = e.target;

    FavoritesAPI.createFavorite(props.id)
    .then(res => {

      if (res.data.warning){

        alert(res.data.warning.msg)

      } else if (res.data.success){

        alert(res.data.success.msg)

      }
    })
    .catch(err => console.log(err))

    if(node.classList.contains("fa-heart-o")){

      node.classList.remove("fa-heart-o");
      node.classList.add("fa-heart")

    } else {

      node.classList.remove("fa-heart");
      node.classList.add("fa-heart-o")

    }

  }


  return (
    <Col size="md-6">
      <div className="PostCard">
        <Row>
          <Col size="md-10">
            <a href={props.url} className="bold-text">
              <h3>
                {props.name}
              </h3>
            </a>
            <div className="PostCard-Meta">
              ${props.price} <span>- Created {props.date}</span>
            </div>
          </Col>
          <Col size="md-2">
            <div className="favorite-block">
              <a href="#/" onClick={handleFav}>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  </Col>
)
}

export default PostCard;
