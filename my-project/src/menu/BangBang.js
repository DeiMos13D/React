import React, { Component } from 'react'

class BangBang extends Component {
    render () {
        return (
            <span>
                {this.props.id} + {this.props.page}
            </span>
        )
    }
}

export default BangBang