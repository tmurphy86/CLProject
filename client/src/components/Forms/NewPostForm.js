import React from "react";
import { Col, Row, Container } from "../Grid";
import { ContentCard, ContentCardBody } from "../Cards";
import {PostsAPI, CategoryAPI} from '../../API';
import { Redirect } from 'react-router-dom'


class NewPostForm extends React.Component {
  constructor(){
    super()

    this.state = {

      // Form values
      postTitle:"",
      postBody:"",
      postCategory:"",
      postPrice:"",
      postObo:false,
      postZip:"",
      postPhone:"",
      postStreetAddress:"",
      postCity:"",
      postState:"",

      // Render categories.
      categories:[],

      // Check if submission was successful;
      fireRedirect: false,
    }
  }



  componentWillMount(){
    // Populate Categories Field from Database
    this.grabCategories()
  }

  grabCategories = () =>{

    CategoryAPI.grabCategories()
    .then( res => {

      this.setState({
        categories: res.data
      })

    })
    .catch(err => console.log(err));
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]:!this.state[e.target.name]
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const errorMsgs = document.getElementById("errorMsgs");
    errorMsgs.innerHTML="";

    const postObject = this.state;
    delete postObject.categories; // Don't include categories in the POST request.

    PostsAPI.submitPostData(postObject)
    .then( res => {

      if (res.data.errors){
        this.grabCategories()
        errorMsgs.style.display="block"
        res.data.errors.map(err => {
          const errorMessageNode = document.createElement("li");
          errorMessageNode.append(err.error);
          errorMsgs.append(errorMessageNode)
        })
      } else if(res.data === "success") {
        this.setState({
          fireRedirect: true
        })
      }

    })
    .catch(err => console.log(err));

  }



  render(){
    const { fireRedirect } = this.state;

    return (
      <Container>

        <h2>Create New Post</h2>
        <br/>
        <br/>

        <div className="alert alert-danger" id="errorMsgs" style={{display:"none"}} role="alert"></div>

        <form id="newPostForm">
          <Row>
            <Col size="md-8">
              <ContentCard>
                <ContentCardBody>
                  <div className="form-group">
                    <label htmlFor="inputTitle" className="form-label">Post Title</label>
                    <input type="text" className="form-control" name="postTitle" value={this.state.postTitle} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputState" className="form-label">Post Body</label>
                    <textarea className="form-control" name="postBody" rows="6" value={this.state.postBody} onChange={this.handleInputChange} required></textarea>
                  </div>

                  {/* Accordion for Optional Fields */}

                  <div id="accordion" role="tablist">
                    <div className="card">
                      <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="card-header" role="tab" id="headingOne">
                          <h5 className="mb-0">
                            Optional Fields
                          </h5>
                        </div>
                      </a>

                      <div id="collapseOne" className="collapse hide" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">

                          <Row>
                            <Col size="md-3">
                              <div className="form-group">
                                <label htmlFor="inputPhone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name="postPhone" maxLength="10" value={this.state.postPhone} onChange={this.handleInputChange} />
                              </div>
                            </Col>
                            <Col size="md-4">
                              <div className="form-group">
                                <label htmlFor="inputStreetAddress" className="form-label">Street Address</label>
                                <input type="text" className="form-control" name="postStreetAddress" value={this.state.postStreetAddress} onChange={this.handleInputChange} />
                              </div>
                            </Col>
                            <Col size="md-3">
                              <div className="form-group">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" name="postCity" value={this.state.postCity} onChange={this.handleInputChange}/>
                              </div>
                            </Col>
                            <Col size="md-2">
                              <div className="form-group">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <input type="text"  maxLength="2" className="form-control" name="postState" value={this.state.postState} onChange={this.handleInputChange} />
                              </div>
                            </Col>
                          </Row>

                        </div>
                      </div>
                    </div>
                  </div>
                </ContentCardBody>
              </ContentCard>
            </Col>
            <Col size="md-4" offset="ml-auto">
              <ContentCard>
                <ContentCardBody>
                  <div className="form-group">
                    <label htmlFor="inputCategory" className="form-label">Category</label>
                    <select id="category" className="form-control" name="postCategory" onChange={this.handleInputChange} value={this.state.category} required>
                      <option defaultValue></option>
                      {(() => {
                        if(this.state.categories){
                          return (
                            this.state.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                          )
                        }
                      })()}

                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-addon">$</span>
                      <input type="text" className="form-control" name="postPrice" placeholder="Price" value={this.state.postPrice} onChange={this.handleInputChange} required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <Row>
                      <Col size="md-6">
                        <label htmlFor="inputOBO" className="form-label">Accept Best Offer</label>
                      </Col>
                      <Col size="md-1">
                        <div className="form-check">
                          <input className="form-check-input" name="postObo" type="checkbox" onClick={this.handleCheckbox} value="" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputZip" className="col-form-label">Zip</label>
                    <Row>
                      <Col size="md-5">
                        <input type="text" className="form-control" name="postZip" maxLength="5" value={this.state.postZip} onChange={this.handleInputChange} required/>
                      </Col>
                      <Col size="md-6" offset="ml-auto">
                        <button className="btn btn-primary" onClick={this.submitForm}>SUBMIT POST</button>
                      </Col>
                    </Row>
                  </div>
                </ContentCardBody>
              </ContentCard>
            </Col>
          </Row>
        </form>

        {fireRedirect && (
          <Redirect to={'/'}/>
        )}

      </Container>
    )
  }
}

export default NewPostForm;
