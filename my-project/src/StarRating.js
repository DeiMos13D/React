import React from 'react';
import PropTypes from 'prop-types';
// import createClass from 'create-react-class';


const Star = ({selected=false, onClick=f=>f}) =>
    <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

//React class
// const StarRating = createClass({
//     displayName: 'StarRating',
//     propTypes: {
//         totalStar: PropTypes.number
//     },
//     getDefaultProps() {
//         return {
//             totalStars: 5
//         }
//     },
//     getInitialState() {
//         return{
//             starsSelected: 0
//         }
//     },
//     componentWillMount() {
//       const {starsSelected} = this.props;
//       if(starsSelected) {
//           this.setState({starsSelected});
//       }
//       console.log('ComponentWillMount');
//     },
//     componentDidMount() {
//         console.log('componentDidMount');
//     },
//     componentWillUpdate() {
//       console.log('update', this.state.starsSelected)
//     },
//     change(starsSelected) {
//         this.setState({starsSelected})
//     },
//     render() {
//         const {totalStars} = this.props;
//         const {starsSelected} = this.state;
//         return (
//             <div className="star-rating">
//                 {[...Array(totalStars)].map((n, i) =>
//                     <Star key={i}
//                         selected={i<starsSelected}
//                         onClick={() => this.change(i+1)}
//                     />
//                 )}
//                 <p>{starsSelected} of {totalStars} stars</p>
//             </div>
//         )
//     }
// })

// ES6 class
class StarRating extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            starsSelected: 0
        };
        this.change = this.change.bind(this);
    };

    change(starsSelected) {
        this.setState({starsSelected})
    };

    componentWillMount() {
        console.log('componentWillMount', this.state.starsSelected)
    };
    componentDidMount() {
        console.log('componentDidMount', this.state.starsSelected)
    };
    componentWillUpdate(a, b) {
        console.log('componentWillUpdate', b.starsSelected)
    };
    componentDidUpdate(a, b) {
        console.log('componentDidUpdate', b.starsSelected)
    };
    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div className='star-rating'>
                {[...Array(totalStars)].map((n,i) =>
                    <Star key={i}
                          selected={i<starsSelected}
                          onClick={() => this.change(i+1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }

}

StarRating.propTypes = {
    totalStars: PropTypes.number
}

StarRating.defaultProps = {
    totalStars: 10
}

export default StarRating