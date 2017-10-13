import axios from "axios";

export default{

  grabPostData: (postId) => {

    return axios.get(`/api/${postId}`);

  },


}
