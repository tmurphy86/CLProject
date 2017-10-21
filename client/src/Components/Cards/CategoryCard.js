import React from "react";
import "./Cards.css";
import {Row, Col} from "../Grid";

const CategoryCard = (props) => {
  return (
    <Col size="md-4">
      <a href={"/c/"+props.id} className="CategoryCard ContentCard">
        <Row>
        <Col size="md-8">
          <p  className="padded-element">
            {props.name}
          </p>
        </Col>
          <Col size="md-4">
            <div className="img-block">
              <img src={props.photo} alt={props.name}/>
            </div>
          </Col>
        </Row>
      </a>
    </Col>
  )
}

export default CategoryCard;
