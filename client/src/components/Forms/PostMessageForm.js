import React from 'react';
import "./Forms.css";

class PostMessageForm extends React.Component {
  render(){
    return (
        <form className="post-message-form">
            <input type="text" placeholder="Type your private message"/>
        </form>
    )
  }
}

export default PostMessageForm;
