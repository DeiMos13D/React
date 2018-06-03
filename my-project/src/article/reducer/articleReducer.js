import {normalizedArticles} from '../articles'
import { fromJS, List } from 'immutable'

const mapArticles = fromJS(normalizedArticles)


export function article(state = mapArticles, action) {
    switch (action.type) {
        case 'REMOVE_ARTICLE': return state.filter((item) => item.get('id') !== action.payload)

        case 'ADD_COMMENT': return state.map((article) => {
            if(article.get('id') === action.article_id) {
                if(List.isList(article.get('comments'))) {
                    return article.update('comments', list => list.push(action.payload.id))
                } else {
                    return article.set('comments', new List([])).update('comments', list => list.push(action.payload.id))
                }
            } else return article })
        default: return state
    }
}