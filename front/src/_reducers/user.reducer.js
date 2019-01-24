import { userConstants } from '../_constants'

// localStorage.removeItem('user')
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? user : null

export function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...action.user,
      }
    case userConstants.LOGIN_FAILURE:
      return null
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state.user,
        ...action.user,
      }
    case userConstants.LOGOUT:
      return null
    default:
      return state
  }
}
