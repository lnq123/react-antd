import { createStore, combineReducers } from 'redux'

export function picturesInfo (state = defaultPicturesInfo, action) {
  switch (action.type) {
    case 'SET_PICTURE': {
      let o = Object.assign({}, state)
      o.pictures[action.idx][action.key] = action.value
      return o
    }
    case 'PUSH_PICTURE': {
      let o = Object.assign({}, state)
      let p = action.picture
      o.pictures.push(p)
      return o
    }
    case 'REMOVE_PICTURE': {
      let o = Object.assign({}, state)
      o.pictures.splice(action.idx, 1)
      return o
    }
    default: return state
  }
}

const defaultPicturesInfo = {
  uploadId: '',
  pictures: [],
}

export const defaultPictureInfo = {
  title: '',
  introduction: '',
  classification: {},
  album: '',
  tags: '',
  price: 0,
  priceType: 0,
}
