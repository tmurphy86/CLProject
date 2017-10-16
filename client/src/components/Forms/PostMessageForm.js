import React from 'react';
import "./Forms.css";

class PostMessageForm extends React.Component {
  constructor(){
    super();

    this.state = {
      messageVal: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      messageVal: e.target.value
    })
  }

  submitMessage = (e) => {
    e.preventDefault();

    if(this.state.messageVal){
      // Submit form.
      console.log(this.state.messageVal)
    } else {
      // Throw error. Don't submit form.
      console.log("empty")
    }



  }



  render(){
    return (
        <form className="post-message-form">
            <textarea rows="3" placeholder="Type your private message" value={this.state.messageVal} onChange={this.handleChange}/>
            <button className="btn btn-primary btn-md pull-right post-message-form-submit" onClick={this.submitMessage}>SEND</button>
        </form>
    )
  }
}

export default PostMessageForm;
