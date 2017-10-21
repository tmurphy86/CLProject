import React from "react";
import {Search, Content, PostCard} from "../Components";
import { Col, Row, Container } from "../Components/Grid";
import {CategoryAPI, PostsAPI} from '../API';
import "./CategoryPage.css";


class CategoryPage extends React.Component {
  constructor(){
    super()

    this.state = {
      categoryId: "",
      categoryName: "",
      posts: []
    }
  }

  componentWillMount(){
    this.grabCategoryData();
    this.grabCategoryPosts();
  }

  grabCategoryData = () => {
    const catId = this.props.match.params.category;

    CategoryAPI.grabCategory(catId)
    .then( res => {
      console.log(res.data)
      this.setState({
        categoryId: res.data.id,
        categoryName: res.data.name,
      })

    })
    .catch(err => console.log(err));
  }


  grabCategoryPosts = () => {
    const catId = this.props.match.params.category;

    PostsAPI.grabPosts(catId)
    .then( res => {
        console.log(res.data)
      this.setState({
        posts: res.data
      })
    })
    .catch(err => console.log(err));

  }


  render(){
    return (

      <Content>
        <Container>
          <Row>
            <Col size="md-12">
              <Search />
            </Col>
            <Col size="md-12">
              <h1>{this.state.categoryName}</h1>
            </Col>


            {(() => {
              if(this.state.categoryName && this.state.posts){
                return (
                  this.state.posts.map(post =>{
                    return (
                      <PostCard key={post.id} id={post.id} name={post.name} date={post.date} price={post.price} url={`/c/${this.state.categoryId}/post/${post.id}`} />
                    )
                  }
                )
              )
            }
          })()}

        </Row>
      </Container>
    </Content>

  )
}
}

export default CategoryPage;
