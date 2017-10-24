import axios from 'axios'
import Auth from '../modules/Auth'
import {setAuthToken} from './index.js'
import qs from 'qs'

export default{

  sendMessage: (msgObj) => {
    setAuthToken(Auth.getToken())
    return axios.post(`/api/messages/`, qs.stringify(msgObj))
  },

  getUsersMessages: (userId) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/api/dashboard/messages/${userId}`)
  }

}
