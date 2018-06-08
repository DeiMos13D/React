import {v4} from 'uuid'
import { push } from 'react-router-redux'

export function addTrack(trackName) {
    return {
        type: 'ADD_TRACK',
        payload: trackName
    }
}

export function removeTrack(trackName) {
    return {
        type: 'REMOVE_TRACK',
        payload: trackName
    }
}

export function removeArticle(id) {
    return {
        type: 'REMOVE_ARTICLE',
        payload: id
    }
}

export function filterData(range) {
    return {
        type: 'FILTER_DATA',
        range: range
    }
}

export function addComment (userName, comment, article_id) {
    return (dispatch, getState) => {
            dispatch({
            type: 'ADD_COMMENT',
            payload: {
                id: v4(),
                user: userName,
                text: comment
            },
            article_id: article_id
        })
        dispatch(push('/articles/new'))
        localStorage['redux-store'] = JSON.stringify(getState())
    }
}

// export function addComment(userName, comment, article_id) {
//     return {
//         type: 'ADD_COMMENT',
//         payload: {
//             id: '',
//             user: userName,
//             text: comment
//         },
//         article_id: article_id
//
//     }
// }