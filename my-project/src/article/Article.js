import React, {Fragment, PureComponent} from 'react'
import CommentsList from './CommentsList'
import {connect} from 'react-redux'
import {removeArticle} from "./AC";


class Article extends PureComponent {

    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    handleRemoveArticle(id) {
        this.props.removeArticle(id)
    }



    getBody = (article) => {
        if(!this.state.isOpen) return null
        return  <Fragment>
            <section> { article.text } </section>
            <button onClick={this.handleRemoveArticle.bind(this, this.props.id)}>Remove Me</button>
            <CommentsList ids={article.comments} article_id = {article.id}/>
        </Fragment>
    }

    render() {
        const id = this.props.id
        const article = this.props.article.filter((article) => article.id === id)[0]

        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={this.toggleOpen}>{this.state.isOpen ? 'close' : 'open'}</button>
                {this.getBody(article)}
            </div>
        )
    }
}

export default connect(
    (state) => ({article: state.articles.toJS()}),
    {removeArticle}
)(Article)