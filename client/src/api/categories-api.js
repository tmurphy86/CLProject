import axios from "axios";
// import qs from "qs"  <---- Use in case of empty objects.

export default{

  grabCategories: () => {
    return axios.get(`/api/categories`);

  },


}
