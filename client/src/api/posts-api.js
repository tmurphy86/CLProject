import axios from "axios";

export default{

  grabPostData: (postId) => {

    return axios.get("/region/forsale/category/post/"+postId);

  },


}
