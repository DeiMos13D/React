import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {addComment} from './AC'


class NewComment extends Component {
    constructor() {
        super()

        this.state = {
            value: '',
            text: ''
        }
    }

    limit = {
        text: {
            min: 15,
            max: 50
        },
        user: {
            min: 5,
            max: 15
        }
    }

    onTextChange = (ev) => {
        this.setState({text: ev.target.value})
        this.validator(ev.target)
    }

    onTextFocus = (ev) => {
        this.validator(ev.target)
    }

    validator = (item) => {
        const {text} = this.state
        if(item.tagName.toLowerCase() === 'textarea') {
            if (text.length < this.limit.text.min || text.length > this.limit.text.max) {
                item.style.outline = '1px solid red'
            } else item.style.outline = '1px solid blue'
        }else if(item.tagName.toLowerCase() === 'input') {
            if (text.length < this.limit.user.min || text.length > this.limit.user.max) {
                item.style.outline = '1px solid red'
            } else item.style.outline = '1px solid blue'
        }
    }

    addNewComment = () => {
        if(this.userName.value && this.comments.value) {
            this.props.addComment(this.userName.value, this.comments.value, this.props.article_id)
        }
        this.userName.value = ''
        this.comments.value = ''
    }

    render() {

        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type='text'
                       onFocus={this.onTextFocus}
                       onChange={this.onTextChange}
                       ref={input => {this.userName = input}}
                />
                <textarea  rows="4" cols="50" style={{marginTop: '5px'}}
                           onFocus={this.onTextFocus}
                           onChange={this.onTextChange}
                           ref={textarea => {this.comments = textarea}}
                /><br/>
                <button onClick={this.addNewComment}>Add Comment</button>
            </div>
        )
    }
}

export default NewComment