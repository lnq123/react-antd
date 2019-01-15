import axios from 'axios'

const url = 'http://47.110.59.114:1337'


export const quickNewsService = {
  get,
}

async function get() {
  try {
    const response = await axios.get(`${url}/quicknews?limit=6&sort=createdAt%20DESC`)
    return response.data
  } catch (error) {
    return null
  }
}