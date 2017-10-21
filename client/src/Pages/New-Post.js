import React from "react";
import {NewPostForm, Content} from "../Components";


class NewPost extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

  render(){
    return (

      <Content>
        <NewPostForm />
      </Content>

    )
  }
}

export default NewPost;
