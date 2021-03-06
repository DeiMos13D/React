import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

const Menu = ({title, recipes}) =>
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className='recipes'>
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>

Menu.propTypes = {
    title: PropTypes.string,
    recipes: PropTypes.array
}

export default Menu