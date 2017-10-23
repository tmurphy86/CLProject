import axios from "axios";
import Auth from '../modules/Auth';
import {setAuthToken} from './index.js';

export default{

  toggleFavorites: (postId, userId) => {

    setAuthToken(Auth.getToken());
    return axios.post(`/api/favorites/${postId}/${userId}`);

  },

  checkIfFavorite: (postId, userId) => {
    
    setAuthToken(Auth.getToken());
    return axios.get(`/api/favorites/${postId}/${userId}`);
  },

  getUsersFavorites: (userId) => {

    setAuthToken(Auth.getToken());
    return axios.get(`/api/dashboard/favorites/${userId}`);
  }

}
