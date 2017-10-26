import React from 'react';
import "./Forms.css";
import {MessageAPI} from '../../API';

class PostMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      messageVal: "",
      senderName: "",
      senderId: "",
      receiverName: "",
      receiverId: "",
      postTitle: "",
      postId: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      messageVal: e.target.value,
      senderName: this.props.senderName,
      senderId: this.props.senderId,
      receiverName: this.props.receiverName,
      receiverId: this.props.receiverId,
      postTitle: this.props.postTitle,
      postId: this.props.postId,
    })
  }

  submitMessage = (e) => {
    e.preventDefault();

    if(this.state.messageVal){
      // Submit form.

      MessageAPI.sendMessage(this.state)
      .then(res => {

        const feedback = document.getElementById("feedback-msg");

        if (res.data.success){
          feedback.innerHTML = `<span class="text-success">${res.data.success.msg}</span>`
          this.setState({
            messageVal:""
          })
        }

        if (res.data.error){
          feedback.innerHTML = `<span class="text-danger">${res.data.error.msg}</span>`
        }
      })
      .catch(err => console.log(err))


    } else {
      // Throw error. Don't submit form.
      console.log("empty")
    }



  }



  render(){
    return (
      <form className="post-message-form">
        <textarea rows="3" placeholder="Type your private message" value={this.state.messageVal} onChange={this.handleChange}/>
        <span id="feedback-msg"></span>
        <button className="btn btn-primary btn-md pull-right post-message-form-submit" onClick={this.submitMessage}>SEND</button>
      </form>
    )
  }
}

export default PostMessageForm;
