import axios from "axios";
import qs from "qs"
import Auth from '../modules/Auth';
import {setAuthToken} from './index.js';

export default{

  grabPostData: (postId) => {
    setAuthToken(Auth.getToken());
    return axios.get(`/api/${postId}`);

  },

  submitPostData: (postObject) => {
  setAuthToken(Auth.getToken());
    return axios.post('/api/newpost', qs.stringify(postObject))

  },

  grabPosts: (catId) => {
    setAuthToken(Auth.getToken());
    return axios.get(`/api/category/${catId}`);

  },


}
