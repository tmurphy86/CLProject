import React from "react";
import { EditPostForm, Content } from "../Components";

class PostEditPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Content>
        <EditPostForm postId={this.props.match.params.id} />
      </Content>
    );
  }
}

export default PostEditPage;
