import React from 'react';
import "./Forms.css";

class PostMessageForm extends React.Component {
  render(){
    return (
        <form className="post-message-form">
            <textarea rows="1" placeholder="Type your private message"/>
        </form>
    )
  }
}

export default PostMessageForm;
