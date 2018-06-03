import {combineReducers} from 'redux'
// import playlist from './playlistReducer' // ADD_TRACK, REMOVE_TRACK
import {article} from './articleReducer'
import {comments} from './commentsReducer'
import filter from './filter/filter'

export default combineReducers({
    // playlist: playlist,
    articles: article,
    filter,
    comments
})