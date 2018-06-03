// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import TrackNames from './TrackNames'
// import {addTrack, removeTrack} from './article/AC/index'
//
// class PlayList extends Component {
//
//     addTrack() {
//         if(this.inputEl.value !== '') {
//             this.props.addTrack(this.inputEl.value)
//             this.inputEl.value = ''
//         }
//     }
//
//     removeTrack() {
//         this.props.removeTrack(this.inputEl.value)
//         this.inputEl.value = ''
//     }
//
//     render() {
//         return(
//             <div>
//                 <input type='text' ref={(input) => {this.inputEl = input}}/>
//                 <button onClick={this.addTrack.bind(this)}>Add Track</button>
//                 <button onClick={this.removeTrack.bind(this)}>Remove Track</button>
//                 <TrackNames store={this.props.store.playlist}/>
//             </div>
//         )
//     }
// }
//
// export default connect(
//         state => ({store: state}),
//         {addTrack, removeTrack}
// )(PlayList)