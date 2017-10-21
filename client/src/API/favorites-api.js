import axios from "axios";
import Auth from '../modules/Auth';
import {setAuthToken} from './index.js';

export default{

  createFavorite: (id) => {

    setAuthToken(Auth.getToken());
    return axios.post(`/api/favorites/${id}`);

  },

}
