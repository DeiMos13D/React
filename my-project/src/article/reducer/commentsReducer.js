import {normalizedComments} from '../articles'
import { fromJS } from 'immutable'
const mapComments = fromJS(normalizedComments)

export function comments(state = mapComments, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.push(action.payload)
        default:
            return state
    }
}