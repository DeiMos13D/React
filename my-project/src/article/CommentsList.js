import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from './decorator/ToggleOpen'
import Comment from './Comment'
import {connect} from 'react-redux'
import NewComment from './NewComment'
import {addComment} from "./AC";

class CommentsList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array
    } // in Article.js

    getComments = (ids = []) => {
        if (this.props.isOpen && ids && ids.length !== 0) {
            return <Comment comments={this.props.comments.filter((comment) => ids.indexOf(comment.id) !== -1)}/>
        } else if (this.props.isOpen && ids && ids.length === 0) {
            return <h3>not a comment</h3>
        } else if (this.props.isOpen && !ids) {
            return <h3>not a comment</h3>
        } else return null
    }

    render() {
        return(
            <Fragment>
                <button onClick={this.props.toggleOpen}>{this.props.isOpen ? 'hide comments' : 'show comments'}</button>
                <div>
                    {this.props.isOpen ? <NewComment addComment={this.props.addComment} article_id = {this.props.article_id}/> : null}
                    {this.getComments(this.props.ids)}
                </div>
            </Fragment>
        )
    }
}

export default connect(
    state => ({ comments: state.comments.toJS() }),
    {addComment}
)(toggleOpen(CommentsList))