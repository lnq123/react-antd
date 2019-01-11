import axios from 'axios'

const url = 'http://localhost:1337'


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