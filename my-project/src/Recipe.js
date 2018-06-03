import React from 'react';
import PropTypes from 'prop-types';
// import createClass from 'create-react-class';

const Recipe = ({name='name', ingredients=['a','b'], steps=['c','d']}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <ul className='ingredients'>
            {ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}: {ingredient.amount}-{ingredient.measuremant}</li>
            )}
        </ul>
        <section className='instructions'>
            <h2>Cooking Instructions</h2>
            {steps.map((step, i) =>
                <p key={i}>{step}</p>
            )}
        </section>
    </section>

Recipe.propTypes = {
    name: PropTypes.string,
    ingredients: PropTypes.array,
    steps: PropTypes.array
}

export default Recipe