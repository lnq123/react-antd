import { createStore, combineReducers } from 'redux'

export function audiosInfo (state = defaultAudiosInfo, action) {
  switch (action.type) {
    case 'SET_AUDIO': {
      let o = Object.assign({}, state)
      o.audios[action.idx][action.key] = action.value
      return o
    }
    case 'PUSH_AUDIO': {
      let o = Object.assign({}, state)
      let p = action.audio
      o.audios.push(p)
      return o
    }
    case 'REMOVE_AUDIO': {
      let o = Object.assign({}, state)
      o.audios.splice(action.idx, 1)
      return o
    }
    default: return state
  }
}

export function videosInfo (state = defaultVideosInfo, action) {
  switch (action.type) {
    case 'SET_VIDEO': {
      let o = Object.assign({}, state)
      o.videos[action.idx][action.key] = action.value
      return o
    }
    case 'PUSH_VIDEO': {
      let o = Object.assign({}, state)
      let p = action.video
      o.videos.push(p)
      return o
    }
    case 'REMOVE_VIDEO': {
      let o = Object.assign({}, state)
      o.videos.splice(action.idx, 1)
      return o
    }
    default: return state
  }
}

const defaultAudiosInfo = {
  uploadId: '',
  audios: [],
}

const defaultVideosInfo = {
  uploadId: '',
  videos: [],
}

export const defaultAVInfo = {
  title: '',
  cover: {
    selected: false,
    file: null,
    thumbUrl: '',
  },
  introduction: '',
  classification: {},
  album: '',
  tags: '',
  price: null,
  priceType: 0,
}
