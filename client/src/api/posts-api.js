import axios from "axios";
import qs from "qs"

export default{

  grabPostData: (postId) => {

    return axios.get(`/api/${postId}`);

  },

  submitPostData: (postObject) => {

    return axios.post('/api/newpost', qs.stringify(postObject))

  },


}
