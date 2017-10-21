import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import { Search, Content, CategoryCard } from "../Components";
import {CategoryAPI} from '../api';



class CategoriesPage extends React.Component {
  constructor(){
    super()

    this.state = {
      // Render categories.
      categories:[],

    }
  }



  componentWillMount(){
    // Populate Categories Field from Database
    this.grabCategories()
  }

  grabCategories = () =>{

    CategoryAPI.grabCategories()
    .then( res => {
      console.log(res.data)
      this.setState({
        categories: res.data
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
              <Row>
                {(() => {
                  if(this.state.categories){
                    return (
                      this.state.categories.map(category =>{
                        return (
                          <CategoryCard key={category.id} name={category.name} photo={category.photo} id={category.id}/>
                        )
                      }
                    )
                  )
                }
              })()}
            </Row>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
}

export default CategoriesPage;
