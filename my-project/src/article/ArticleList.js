import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from './selector/index'
import {Route, Link} from 'react-router-dom'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    } //in index.js

    getArticle = ({match}) => {
        const {id} = match.params
        return <Article id={id}  key={id}/>
    }

    getIndex = () => {
        return <h2>Please select article</h2>
    }

    render() {
        return (
            <div>
            <ul>
                {this.props.articles.map((item) =>
                    <li key={item.id} className='article'>
                        {/*<Article*/}
                            {/*id={item.id}*/}
                            {/*removeArticle={this.props.removeArticle}*/}
                            {/*article={item}*/}
                            {/*toggle={this.props.toggleOpenOnly.bind(this, item.id)}*/}
                            {/*isOpen={this.props.isOpened}*/}
                        {/*/>*/}
                        <Link to={`/articles/${item.id}`}>{item.title}</Link>
                        {/*<Route path = {'/articles/:id'}  render = {this.getArticle}/>*/}
                    </li>)
                }
            </ul>
                <Route path = '/articles' render = {this.getIndex} exact/>
                <Route path= '/articles/:id' render = {this.getArticle} />
            </div>
        )
    }
}

export default connect(
    state => ({articles: filtratedArticlesSelector(state)})
)(ArticleList)