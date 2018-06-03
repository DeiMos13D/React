import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AllApp from './App'
import {Provider} from 'react-redux'
// import {v4} from 'uuid'
import store from './article/store/index'
// import {Name} from './article/name.js'

//****************************
// import { fromJS, isKeyed } from 'immutable'
//
// const obj = {
//     user: [
//         {
//             age: 75,
//             name: 'David',
//             hobby: [1, 2, 3, 4],
//             city: {
//                 num1: 'Erevan',
//                 num2: 'Charencavan',
//                 num3: [{a: 5},{b: 4}]
//             }
//         },
//         {
//             age: 24,
//             name: 'And',
//             hobby: [6, 9],
//             city: {
//                 num1: 'Kirovakan',
//                 num2: 'Leninakan',
//                 num3: []
//             }
//         }
//     ]
// }
//
// const mapToJS = function(map) {
//     return map.toJS();
// }
// const JSToMap = function(JS) {
//     return fromJS(JS)
// }
//
// const obj1 = fromJS(obj)
//
// const obj2 = obj1.update('user', list => list.map(obj => obj.update('hobby', list => list.push(111)))).toJS()
// const obj3 = obj1.updateIn(['user', 0, 'age'], (v) => v+1)
// console.log(obj2)
// console.log(obj1.toJS())
// console.log(mapToJS(obj3))
//******************


window.store = store
// const name = new Name('David')

ReactDOM.render(
    <Provider store={store}>
        <AllApp />
    </Provider>,
    document.querySelector('.divNumTwo')
)







// import {data} from './data'
// import Menu from './Menu'
// import {AddColorForm, logColor} from './AddColorForm'
// import StarRating from './StarRating'
// import registerServiceWorker from './registerServiceWorker'

// ReactDOM.render(
//     <AddColorForm onNewColor={logColor}/>,
//     document.querySelector('.divNumFour')
// )
//
// ReactDOM.render(
//     <Menu recipes={data} title='Delicious Recipes' />,
//     document.querySelector('.divNumTwo')
// )
//
// ReactDOM.render(
//     <StarRating />,
//     document.querySelector('.divNumThree')
// )

