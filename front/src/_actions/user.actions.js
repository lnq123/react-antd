import { userConstants } from '../_constants'
import { userService } from '../_services'

export const userActions = {
  login,
  logout,
}

function login(userData) {
  return async dispatch => {
    try {
      const userRet = await userService.login(userData)
      if (userRet.data) {
        localStorage.setItem('user', JSON.stringify(userRet.data))
        dispatch(success(userRet.data))
      } else {
        dispatch(failure(userRet))
      }
    } catch (error) {
      dispatch(failure(error))
    }

    function success(user) {
      return { type: userConstants.LOGIN_SUCCESS, user }
    }
    function failure(error) {
      return { type: userConstants.LOGIN_FAILURE, error }
    }
  }
}

function logout() {
  return async dispatch => {
    localStorage.removeItem('user')
    dispatch(success())

    function success() {
      return { type: userConstants.LOGOUT }
    }
  }
}
