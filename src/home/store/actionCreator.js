import {fromJS} from 'immutable'
import * as constants from './constants'

export const lightOff = () =>({
    type:constants.LIGHT_OFF
})
export const lightOn = () =>({
    type:constants.LIGHT_ON
})