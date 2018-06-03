import React from 'react';
import PropTypes from 'prop-types';

//Functional Component
// const AddColorForm = ({onNewColor}) => {
//     let _text, _color;
//     const submit = (e) => {
//         e.preventDefault();
//         onNewColor(_text.value, _color.value);
//         _text.value = '';
//         _color.value = '#000000';
//         _text.focus();
//     }
//     return (
//         <form onSubmit={submit}>
//             <input type="text" ref={input => _text = input} placeholder="color title..." required/>
//             <input type="color" ref={input => _color = input} required/>
//             <button>ADD</button>
//         </form>
//     )
// }

//ES6 class component
class AddColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    static propTypes = {
        onNewColor: PropTypes.func
    }

    submit(e) {
        const {_text, _color} = this.refs;
        e.preventDefault();
        if(this.props.onNewColor){
            this.props.onNewColor(_text.value, _color.value);
        }
        _text.value = '';
        _color.value = '#000000';
        _text.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input id="text" ref="_text" type="text" placeholder='color title...' required/>
                <input id="color" ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}




const logColor = (title, color) =>
    console.log(`New color: ${title} ${color}`)

export {logColor, AddColorForm}
