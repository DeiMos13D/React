//********************************1
    // let items = ['num 1', 'num 2', 'num 3', 'num 4', 'num 5'];
    //
    // let el = React.createElement(
    //                'ul',
    //                {id: 'list'},
    //                items.map((item, i) =>
    //                     React.createElement('li', {key: i}, item))
    // );
    //
    // ReactDOM.render(el, document.querySelector('.divNumOne'));

// React.createClass
    // let items = ['num 1', 'num 2', 'num 3', 'num 4', 'num 5'];
    // let IngredientList = React.createClass({
    //     displayName: 'IngredientList',
    //     renderListItem(item, i) {
    //         return React.createElement('li', {key: i}, item)
    //     },
    //
    //     render() {
    //         return React.createElement('ul', {className: 'ingredients'},
    //             this.props.items.map(this.renderListItem)
    //         )
    //     }
    // })
    //
    // let el = React.createElement(IngredientList, {items}, null);
    // ReactDOM.render(el, document.querySelector('.divNumTwo'));

// React.Component
    // let items2 = ['num 6', 'num 7', 'num 8', 'num 9', 'num 10'];
    // class IngredientList extends React.Component {
    //     renderListItem(item, i) {
    //         return React.createElement('li', {key: i}, item)
    //     };
    //
    //     render() {
    //         return React.createElement('ul', {className: 'ingredients'},
    //             this.props.items2.map(this.renderListItem)
    //         )
    //     }
    // }
    //
    // let el3 = React.createElement(IngredientList, {items2}, null);
    // ReactDOM.render(el3, document.querySelector('.divNumTwo'));

// Functional Component
    // let items3 = ['num 11', 'num 12', 'num 13', 'num 14', 'num 15'];
    // const IngList = (props) =>
    //     React.createElement('ul', null,
    //         props.items3.map((item, i) =>
    //             React.createElement('li', {key: i}, item))
    //     )
    //
    // let el2 = React.createElement(IngList, {items3}, null);
    // ReactDOM.render(el2, document.querySelector('.divNumThree'));
    //

// Factory JSX
//     let items = ['num 1', 'num 2', 'num 3', 'num 4', 'num 5'];
//     let IngredientList = React.createClass({
//         displayName: 'IngredientList',
//         renderListItem(item, i) {
//             return <li key={i}>{item}</li>
//         },
//
//         render() {
//             return React.DOM.ul({className: 'ingredients'},
//                 this.props.items.map(this.renderListItem)
//             )
//         }
//     })
//
//     let el = React.createFactory(IngredientList);
//     ReactDOM.render(el({items}), document.querySelector('.divNumTwo'));

import Recipe from './modules/modul'

let data = [
    {
        name: 'Recipe 1',
        ingredients: [
            {name: 'ingredient 1', amount: 1, measuremant: 'cup'},
            {name: 'ingredient 2', amount: 1, measuremant: 'cup'},
            {name: 'ingredient 3', amount: 3, measuremant: 'cup'},
            {name: 'ingredient 4', amount: 0.5, measuremant: '1 lb'},
            {name: 'ingredient 5', amount: 2, measuremant: 'cup'}
        ],
        steps: [
             'step 1',
             'step 2',
             'step 3',
             'step 4',
             'step 5',
        ]
    },
    {
        name: 'Recipe 2',
        ingredients: [
            {name: 'ingredient 1', amount: 1, measuremant: 'cup'},
            {name: 'ingredient 2', amount: 1, measuremant: 'cup'},
            {name: 'ingredient 3', amount: 3, measuremant: 'cup'},
            {name: 'ingredient 4', amount: 0.5, measuremant: '1 lb'},
            {name: 'ingredient 5', amount: 2, measuremant: 'cup'}
        ],
        steps: [
            'step 1',
            'step 2',
            'step 3',
            'step 4',
            'step 5',
        ]
    }
];


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

ReactDOM.render(
    <Menu recipes={data} title='Delicious Recipes' />,
    document.querySelector('.divNumOne')
)