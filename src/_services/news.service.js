import axios from 'axios'

const url = 'http://192.168.12.25:1337'


export const newsService = {
  getHomepage,
  getHot,
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
    const response = await axios.get(url + '/news?limit=5&sort=views%20DESC')
    return response.data
  } catch (error) {
    return null
  }
}