import { createStore, combineReducers } from 'redux'
import { documentIcon } from './upload_info'

export function literatureInfo (state = defaultLiterature, action) {
  switch (action.type) {
    case 'SET_LITERATURE': {
      let o = Object.assign({}, state)
      o[action.key] = action.value
      return o
    }
    default: return state
  }
}

const defaultLiterature = {
  uploadId: '000',
  uploadType: 'literature',
  title: '',
  cover: {
    selected: false,
    file: null,
    thumbUrl: documentIcon,
  },
  introduction: '',
  classification: {},
  album: '',
  tags: '',
  priceType: 0,
  price: 0,
  content: '',
}
