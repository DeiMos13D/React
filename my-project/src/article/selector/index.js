import {createSelector} from 'reselect'


const stateGetter = state => state

export const filtratedArticlesSelector = createSelector( stateGetter, (state) => {
    const {articles, filter: {from, to}} = state
    return articles.toJS().filter((article) => {
        const articleDate = Date.parse(article.date)
        return !from || !to ||
            (articleDate >= Date.parse(from) && articleDate <= Date.parse(to))
    })
})