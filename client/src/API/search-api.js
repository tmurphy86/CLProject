import axios from 'axios'
import Auth from '../modules/Auth'
import {setAuthToken} from './index.js'

export default{

  grabSearchResults: (query) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/public/api/search/${query}`)
  }

}
