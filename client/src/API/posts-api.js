import axios from 'axios'
import qs from 'qs'
import Auth from '../modules/Auth'
import {setAuthToken} from './index.js'

export default{

  grabPostData: (postId) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/public/api/${postId}`)
  },

  submitPostData: (postObject) => {
    setAuthToken(Auth.getToken())
    return axios.post('/api/newpost', qs.stringify(postObject))
  },

  grabPosts: (catId) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/public/api/category/${catId}`)
  },

  getUsersPosts: (userId) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/api/dashboard/posts/${userId}`)
  },

  deletePost: (postId, userId) => {
    setAuthToken(Auth.getToken())
    return axios.delete(`/api/dashboard/posts/delete/${userId}/${postId}`)
  },

  updatePostData: (postObject) => {
    console.log(postObject)
    setAuthToken(Auth.getToken())
    return axios.post('/api/editpost', qs.stringify(postObject))
  },

  getPostDataForEdit: (postId, userId) => {
    setAuthToken(Auth.getToken())
    return axios.get(`/api/editpost/${postId}/${userId}`)
  }

}
