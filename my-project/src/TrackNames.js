import React, {Component} from 'react'

class TrackNames extends Component {

    render() {
        return(
            <ul>
                {this.props.store.map((item, i)=> <li key={i}>{item}</li>)}
            </ul>
        )
    }
}

export default TrackNames