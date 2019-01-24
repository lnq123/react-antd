import axios from 'axios'
import { authHeader } from '../_helpers';

const url = 'http://localhost:1337'

console.log('AUTH HEADER', authHeader());



// let data = {
//   'HTTP_CONTENT_LANGUAGE': self.language
// }

// axios.post(URL, data, config)

export const newsService = {
  getHomepage,
  getHot,
  getOne,
  dislike,
  like,
  create,
}

async function getHomepage(nb, page) {
  try {
    const skip = nb * page
    const response = await axios.get(url + '/news?limit=' + nb + '&skip=' + skip + '&sort=createdAt%20DESC')
    return response.data
  } catch (error) {
    return null
  }
}

async function getHot() {
  try {
    const response = await axios.get(url + '/news?limit=5&sort=views%20DESC&sort=createdAt%20DESC')
    return response.data
  } catch (error) {
    return null
  }
}

async function getOne(id) {
  try {
    const response = await axios.get(url + '/news/' + id)
    return response.data
  } catch (error) {
    return null
  }
}

async function like(id) {
  try {
    const response = await axios.post(url + '/news/like/' + id)
    return response.data
  } catch (error) {
    return null
  }
}

async function dislike(id) {
  try {
    const response = await axios.post(url + '/news/dislike/' + id)
    return response.data
  } catch (error) {
    return null
  }
}

async function create(content) {
  try {
    const response = await axios.post(url + '/news/', content, {headers: authHeader()})
    return response.data
  } catch (error) {
    return null
  }
}