import axios from "axios";
import Auth from '../modules/Auth';
import {setAuthToken} from './index.js';
// import qs from "qs"  <---- Use in case of empty objects.

export default{

  grabCategories: () => {

    setAuthToken(Auth.getToken());
    return axios.get(`/public/api/categories`);

  },
  grabCategory: (catID) => {
  console.log(catID)
  // Should not need to be logged in to see this page.
  setAuthToken(Auth.getToken());
  return axios.get(`/public/api/categories/${catID}`);

},


}
