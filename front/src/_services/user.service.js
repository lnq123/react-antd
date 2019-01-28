import axios from 'axios'

const url = 'http://localhost:1337'

export const userService = {
  create,
  login,
}

async function create(newUser) {
  try {
    console.log('AXIOS', newUser);
    
    const response = await axios.post(`${url}/user`, newUser)
    return response
  } catch (error) {
    console.log(error);
    
    return null
  }
}

async function login(newUser) {
  try {
    const response = await axios.post(`${url}/auth/getToken`, newUser)
    return response
  } catch (error) {
    return null
  }
}