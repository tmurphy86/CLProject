import React from 'react'
import { Col, Row, Container } from "../Components/Grid";
import { Search, SearchResults, Content} from "../Components";


class SearchPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: "",
    }
  }

  componentWillMount(){
    this.setState({
      searchTerm: this.props.match.params.query,
    })
  }


  render(){
    return (
      <Content>
        <Container>
          <Row>
            <Col size="md-12">
              <Search />
            </Col>

            <SearchResults searchTerm={this.state.searchTerm} />

          </Row>
        </Container>
      </Content>
    )
  }

}

export default SearchPage;
