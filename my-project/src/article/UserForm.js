import React, {Component} from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: null
        }
    }

    onTextChange = (ev) => {
        this.setState({value: ev.target.value})
    }

    render() {
        return(
            <div>
                Name: <input type='text' onChange={this.onTextChange}/>
            </div>
        )
    }
}

export default UserForm