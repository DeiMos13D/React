import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
// import {commentIDGenerator} from '../middlewares/commentIDGenerator'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware( thunk /*, commentIDGenerator*/))

let state
if(localStorage['redux-store']){
    state = JSON.parse(localStorage['redux-store'])
    const articles = fromJS(state.articles)
    const comments = fromJS(state.comments)

    var currentState = {
        ...state,
        articles: articles,
        comments: comments
    }
}

const store = createStore(reducer, currentState , enhancer)

export default store